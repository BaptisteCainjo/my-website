"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function ViewPage() {
  const [embeds, setEmbeds] = useState<{ id: string; code: string }[]>([]);
  console.log(embeds);

  useEffect(() => {
    const fetchEmbeds = async () => {
      const { data, error } = await supabase
        .from("linkedin")
        .select("id, code")
        .order("created_at", { ascending: false });

      if (data) setEmbeds(data);
      if (error) console.error("Erreur chargement:", error.message);
    };

    fetchEmbeds();
  }, []);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl mb-4">Embeds enregistrés</h1>
      <div className="space-y-6">
        {embeds.map((embed) => (
          <div
            key={embed.id}
            dangerouslySetInnerHTML={{ __html: embed.code }}
          />
        ))}
      </div>
    </main>
  );
}
