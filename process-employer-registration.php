<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $companyName = $_POST["company"];
    $skillRequired = $_POST["skills"];
    $location = $_POST["Location"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $contactNumber = $_POST["contact"];

    // Perform any necessary data validation and processing here
    // For example, you can validate email format, hash passwords, etc.

    // Store the data in a database, file, or any other data storage method
    // For this example, let's save the data in a JSON file

    $employerData = json_decode(file_get_contents("employer-data.json"), true);
    $newEmployer = [
        "companyName" => $companyName,
        "skillRequired" => $skillRequired,
        "location" => $location,
        "email" => $email,
        "password" => $password,
        "contactNumber" => $contactNumber
    ];
    $employerData[] = $newEmployer;

    // Save the updated data back to the JSON file
    file_put_contents("employer-data.json", json_encode($employerData, JSON_PRETTY_PRINT));

    // You can also perform other actions, such as sending a confirmation email

    // Redirect the user to a thank you page or any other relevant page
    header("Location: thank-you.html");
    exit();
}
?>
