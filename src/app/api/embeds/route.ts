import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "embeds.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  const embeds = JSON.parse(data);
  return NextResponse.json(embeds);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = fs.readFileSync(filePath, "utf-8");
  const embeds = JSON.parse(data);

  embeds.push({ id: Date.now(), code: body.code });

  fs.writeFileSync(filePath, JSON.stringify(embeds, null, 2));
  return NextResponse.json({ success: true });
}
