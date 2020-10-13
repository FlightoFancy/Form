<?php
session_start();
if (!$_SESSION['user']) {
    header('Location:index.php');
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Профиль</title>
    <link rel="stylesheet" href="css/main.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet">

</head>
<body>
<form>
    <h1><?= $_SESSION['user']['login'] ?></h1>
</form>
<a href="logout.php">выход</a>


</body>
</html>