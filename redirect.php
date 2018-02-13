<?php
if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
$name = $_POST['login'];
$password = $_POST['password'];


if($name !='' && $password !='')
{
header("Location:index.php");
}
else{
?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
}
}
?>