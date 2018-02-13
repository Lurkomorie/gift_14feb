<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="login.css">
    <title>Document</title>
</head>
<body>
<div class="login-page">
  <div class="form">
    <form action="login.php" class="login-form" name="#form" id="#form" method="post">
      <input name="login" type="text" placeholder="username"/>
      <input name="password" type="password" placeholder="password"/>
      <input id="btn" name="submit" type="submit" value="Login">
      <?php
        include "redirect.php";
      ?>
    </form>
  </div>
</div>
</body>
</html>