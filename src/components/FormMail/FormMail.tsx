import React, { useState } from "react";
import FormMailStyle from "./FormMail.module.scss";

export default function FormMail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setResponseMessage("Votre message a été envoyé avec succès.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(`Erreur: ${response.text()}`);
      }
    } catch (error: any) {
      console.log(`Erreur de connexion: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={FormMailStyle.form}>
      <label htmlFor="">
        Nom
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          required
        />
      </label>

      <label htmlFor="">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
      </label>

      <button type="submit">Envoyer</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
