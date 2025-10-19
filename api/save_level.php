<?php
session_start();
require_once "../config.php";

header('Content-Type: application/json');

// Check if user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    echo json_encode(["success" => false, "error" => "User not logged in"]);
    exit;
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->level) || !is_numeric($data->level)) {
    echo json_encode(["success" => false, "error" => "Invalid level data"]);
    exit;
}

$new_level = intval($data->level);
$user_id = $_SESSION["id"];

// Prepare an update statement
$sql = "UPDATE users SET level = ? WHERE id = ?";

if ($stmt = mysqli_prepare($link, $sql)) {
    mysqli_stmt_bind_param($stmt, "ii", $new_level, $user_id);

    if (mysqli_stmt_execute($stmt)) {
        $_SESSION["level"] = $new_level; // Update session variable as well
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Database execute failed."]);
    }

    mysqli_stmt_close($stmt);
} else {
    echo json_encode(["success" => false, "error" => "Database prepare failed."]);
}

mysqli_close($link);
?>
