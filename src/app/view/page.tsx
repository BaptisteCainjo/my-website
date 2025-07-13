"use client";

import { useEffect, useState } from "react";

export default function ViewPage() {
  const [embeds, setEmbeds] = useState<{ id: number; code: string }[]>([]);

  useEffect(() => {
    fetch("/api/embeds")
      .then((res) => res.json())
      .then((data) => setEmbeds(data));
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
