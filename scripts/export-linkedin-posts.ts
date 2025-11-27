import { createClient } from "@supabase/supabase-js";
import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "❌ Erreur: Les variables d'environnement NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY doivent être définies dans le fichier .env"
  );
  process.exit(1);
}

const OUTPUT_FILE = path.join(
  __dirname,
  "..",
  "src",
  "utils",
  "data",
  "linkedinPosts.json"
);

interface LinkedInPost {
  id: string;
  code: string;
  created_at: string;
}

async function exportLinkedInPosts(): Promise<void> {
  console.log("🚀 Démarrage de l'export des posts LinkedIn...\n");

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    console.log("📥 Récupération des posts depuis Supabase...");
    const { data: posts, error } = await supabase
      .from("linkedin")
      .select("*")
      .order("created_at", { ascending: false })
      .returns<LinkedInPost[]>();

    if (error) {
      console.error(
        "❌ Erreur lors de la récupération des posts:",
        error.message
      );
      process.exit(1);
    }

    if (!posts || posts.length === 0) {
      console.log("⚠️  Aucun post trouvé dans la base de données.");
      // On crée quand même un fichier vide
      await fs.writeFile(OUTPUT_FILE, JSON.stringify([], null, 2), "utf-8");
      console.log("✅ Fichier JSON vide créé avec succès.");
      return;
    }

    console.log(
      `💾 Sauvegarde de ${posts.length} post(s) dans ${OUTPUT_FILE}...`
    );
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2), "utf-8");

    const stats = await fs.stat(OUTPUT_FILE);
    const fileSizeKB = (stats.size / 1024).toFixed(2);

    console.log("\n✅ Export terminé avec succès !");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`📊 Résumé :`);
    console.log(`   • Nombre de posts exportés : ${posts.length}`);
    console.log(`   • Fichier de destination : ${OUTPUT_FILE}`);
    console.log(`   • Taille du fichier : ${fileSizeKB} KB`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    if (posts.length > 0) {
      console.log("📝 Aperçu des derniers posts :");
      posts.slice(0, 3).forEach((post, index) => {
        console.log(
          `   ${index + 1}. ID: ${post.id} | Créé le: ${post.created_at}`
        );
      });
      if (posts.length > 3) {
        console.log(`   ... et ${posts.length - 3} autre(s) post(s)\n`);
      }
    }
  } catch (error) {
    console.error("❌ Erreur inattendue:", (error as Error).message);
    process.exit(1);
  }
}

exportLinkedInPosts();
