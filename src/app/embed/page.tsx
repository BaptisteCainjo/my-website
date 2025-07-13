"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/embeds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (res.ok) {
      setSuccess(true);
      setCode("");
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl mb-4">Ajouter un embed</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="<iframe ...></iframe>"
          rows={4}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>
        {success && <p className="text-green-600">Code ajouté !</p>}
      </form>
    </main>
  );
}
