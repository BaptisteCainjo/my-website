"use client";

import { supabase } from "@/utils/supabaseClient";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "@") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      setPasswordError("Mot de passe incorrect");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const { error } = await supabase.from("linkedin").insert({ code });
    if (!error) {
      setSuccess(true);
      setCode("");
    } else {
      console.error("Erreur Supabase:", error.message);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>

      {!authenticated ? (
        <>
          <h1>Authentification</h1>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Authentifier</button>
            {passwordError && <p>{passwordError}</p>}
          </form>
        </>
      ) : (
        <>
          <h1>Ajouter un embed</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="<iframe ...></iframe>"
            />
            <button type="submit">Ajouter</button>
            {success && <p>Code ajouté !</p>}
          </form>
        </>
      )}
    </>
  );
}
