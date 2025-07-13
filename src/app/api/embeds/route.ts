import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "utils", "embeds.json");

export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const embeds = JSON.parse(data);
    return NextResponse.json(embeds);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lecture fichier" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = fs.readFileSync(filePath, "utf-8");
    const embeds = JSON.parse(data);

    embeds.push({ id: Date.now(), code: body.code });

    fs.writeFileSync(filePath, JSON.stringify(embeds, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur écriture fichier" },
      { status: 500 }
    );
  }
}
