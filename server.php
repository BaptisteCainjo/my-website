<?php
// Lire les données JSON envoyées par le client
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['email'])) {
    // Destinataire de l'email
    $to = "contact@baptistecainjo.fr";
    // Sujet de l'email
    $subject = "Nouveau message du formulaire de contact";

    // Message de l'email
    $message = "Nom: " . htmlspecialchars($data['name']) . "\n\n";
    $message .= "Email: " . htmlspecialchars($data['email']) . "\n\n";
    $message .= "Message:\n" . htmlspecialchars($data['message']);

    // En-têtes de l'email
    $headers = "From: " . htmlspecialchars($data['email']) . "\r\n";
    $headers .= "Reply-To: " . htmlspecialchars($data['email']) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoyer l'email
    if (mail($to, $subject, $message, $headers)) {
        // Réponse en cas de succès
        http_response_code(200);
        echo "Votre message a été envoyé avec succès.";
    } else {
        // Réponse en cas d'échec
        http_response_code(500);
        echo "Erreur lors de l'envoi de l'email.";
    }
} else {
    // Réponse en cas de données manquantes
    http_response_code(400);
    echo "Données manquantes.";
}
?>