<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Us Email</title>
</head>
<body>
    <p>Name: {{ $data['name'] }}</p>
    <p>Email: {{ $data['email'] }}</p>
    <p>Telephone: {{ $data['telephone'] }}</p>
    <p><b>Message:</b></p>
    <p>{{ $data['message'] }}</p>
</body>
</html>
