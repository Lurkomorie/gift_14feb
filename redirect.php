<?php
if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
$name = $_POST['login'];
$password = $_POST['password'];


if($name =='Elizabeth' && $password =='Tolkin')
{
header("Location:https://giftforeliza.000webhostapp.com/main.php");
}
else{
?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
}
}
?>