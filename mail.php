<?php
$to = 'ambientwave101@gmail.com';


$title = 'напишите нам';


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "БацькАтаман\r\n<br /> Имя: ";
$headers .= substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);

$headers .= "<br /> E-mail: ";
$headers .= substr(htmlspecialchars(trim($_POST['mail'])), 0, 1000);

$headers .= "<br /> Тема: ";
$headers .= substr(htmlspecialchars(trim($_POST['tem'])), 0, 1000);

$headers .= "\r\n<br/> Сообщение: ";
$headers .= substr(htmlspecialchars(trim($_POST['mess'])), 0, 1000);

mail($to, $title, $mess, $headers);
echo "<html><head>
<meta http-equiv="refresh" content="1 ; URL=http://xn--80aaa1cg0a.xn--90ais" />

</head></html>";
?>

