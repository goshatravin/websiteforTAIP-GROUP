<?php

$recepient = "taipgroup@yandex.ru";
$sitename = "TAIP GROUP - транспортная компания";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text \nemail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");