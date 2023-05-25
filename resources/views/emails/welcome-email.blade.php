<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to South Sudan Global</title>
</head>
<body>
    <p>Dear {{ $user->name }},</p>

    <p>Thank you for registering on our website. We're excited to have you as a part of our community!</p>

    <p>Here are your registration details:</p>

    <ul>
        <li><strong>Name:</strong> {{ $user->name }}</li>
        <li><strong>Email:</strong> {{ $user->email }}</li>
    </ul>

    <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>

    <p>Enjoy your experience on our website!</p>

    <p>Best regards,</p>
    <p>The SSG Team</p>
</body>
</html>
