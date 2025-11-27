import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabaseClient";

export async function GET() {
  try {
    const { error, count } = await supabase
      .from("linkedin")
      .select("*", { count: "exact", head: true });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors du ping de la base de données",
          details: error.message,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Base de données active",
        postsCount: count,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Erreur inattendue",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
