"use client";

import { useEffect, useState } from "react";
import FormMailStyle from "./FormMail.module.scss";
import Modal from "@/components/Modal/Modal";

export default function FormMail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setIsError(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(`Erreur: ${data.error}`);
        setIsError(true);
      }
    } catch (error: any) {
      console.error(`Erreur de connexion: ${error.message}`);
      setResponseMessage(
        "Une erreur s'est produite lors de l'envoi du message."
      );
      setIsError(true);
    }
  };

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  return (
    <form onSubmit={handleSubmit} className={FormMailStyle.form}>
      <label htmlFor="name">
        Nom
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          required
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
      </label>

      <button type="submit">Envoyer</button>

      <Modal responseMessage={responseMessage} isError={isError} />
    </form>
  );
}
