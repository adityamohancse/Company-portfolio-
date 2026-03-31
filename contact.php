<?php
/**
 * Contact Form Handler
 * Processes contact form submissions and sends emails
 */

// Set header for JSON response
header('Content-Type: application/json');

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Configuration
define('RECIPIENT_EMAIL', 'mohanjhaaditya74@gmail.com'); // Change this to your email

define('SITE_NAME', 'TechVision');

// Response array
$response = [
    'success' => false,
    'message' => '',
    'errors' => []
];

// Check if request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['errors'][] = 'Invalid request method';
    echo json_encode($response);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation
if (empty($name)) {
    $response['errors'][] = 'Name is required';
}

if (empty($email)) {
    $response['errors'][] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['errors'][] = 'Invalid email address';
}

if (empty($subject)) {
    $response['errors'][] = 'Subject is required';
}

if (empty($message)) {
    $response['errors'][] = 'Message is required';
}

// If there are validation errors, return them
if (!empty($response['errors'])) {
    echo json_encode($response);
    exit;
}

// Sanitize data
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Prepare email
$to = RECIPIENT_EMAIL;
$email_subject = "[" . SITE_NAME . " Contact Form] " . $subject;

// Email body (HTML)
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #6366f1; margin-bottom: 5px; }
        .field-value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #6366f1; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='field-label'>Name:</div>
                <div class='field-value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Email:</div>
                <div class='field-value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Subject:</div>
                <div class='field-value'>{$subject}</div>
            </div>
            <div class='field'>
                <div class='field-label'>Message:</div>
                <div class='field-value'>" . nl2br($message) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the contact form on " . SITE_NAME . "</p>
        </div>
    </div>
</body>
</html>
";

// Plain text version
$email_body_plain = "New Contact Form Submission\n\n";
$email_body_plain .= "Name: {$name}\n";
$email_body_plain .= "Email: {$email}\n";
$email_body_plain .= "Subject: {$subject}\n\n";
$email_body_plain .= "Message:\n{$message}\n";

// Email headers
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";
$headers[] = "From: " . SITE_NAME . " <noreply@" . $_SERVER['HTTP_HOST'] . ">";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    $response['success'] = true;
    $response['message'] = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
} else {
    $response['errors'][] = 'Failed to send email. Please try again later.';
}

// Return JSON response
echo json_encode($response);
exit;
?>
