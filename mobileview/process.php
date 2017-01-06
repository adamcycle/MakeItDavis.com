<?php echo "<span style=\"font-family: sans-serif; font-size: small;\">Your Message Has Been Sent</span>";
?>

<?php
@extract($_POST);
$subject="Website Contact";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

mail('dfwdavis@gmail.com',$subject,"Name: $name
\nEmail: $email
\nMessage: $message");
?>