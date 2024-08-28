import React, { useState } from 'react';

export default function FormMail() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.text();

            if (response.ok) {
                setResponseMessage('Votre message a été envoyé avec succès.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setResponseMessage(`Erreur: ${data}`);
            }
        } catch (error: any) {
            setResponseMessage(`Erreur de connexion: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
            />
            <button type="submit">Envoyer</button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
}