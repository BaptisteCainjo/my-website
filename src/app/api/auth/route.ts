import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  try {
    const { password } = await req.json();

    if (password === process.env.PASSWORD_LINKEDIN_ROUTE) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: "Mot de passe incorrect." },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération du mot de passe." },
      { status: 500 }
    );
  }
}
