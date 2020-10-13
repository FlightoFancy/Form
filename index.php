<?php
session_start();
if ($_SESSION['user']) {
    header('Location:profile.php');
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8"/>
    <title>Авторизация</title>
    <link rel="stylesheet" href="css/main.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet">
</head>

<body>
<form>
    <label>Логин</label>
    <input type="text" name='login' placeholder="Введите свой логин"/>
    <label>Пароль</label>
    <input type="password" name='password' placeholder="Введите пароль"/>
    <button type=submit class='login-btn'>Войти</button>
    <p>У вас нет аккаунта? - <a href="/register.php">зарегистрируйтесь</a></p>

    <p class="msg none"></p>

</form>
<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/main.js"></script>
</body>

</html>