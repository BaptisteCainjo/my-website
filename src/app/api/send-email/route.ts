import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { EMAIL } from "@/utils/constants";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: EMAIL,
      subject: "Nouveau message de contact",
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès.", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
