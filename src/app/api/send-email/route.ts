import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Ly1JAotg_M8Moa43oq3UHdPaGbou3CVb3");

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log(name, email, message);

  try {
    const data = resend.emails.send({
      from: "onboarding@resend.dev",
      to: "cainjo.baptiste@orange.fr",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
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
