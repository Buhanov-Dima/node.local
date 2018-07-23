<?php

$_POST["mail"] =  substr(htmlspecialchars(trim($_POST['mail'])), 0, 100);
$email = $_POST["mail"];



include('MailChimp.php');

use \DrewM\MailChimp\MailChimp;

$MailChimp = new MailChimp('648a24043ffd8640fa4b06c5c51cf50d-us17');

$list_id = 'fae1aae1d0';

$result = $MailChimp->post("lists/$list_id/members", [
                'email_address' => $email,
                'status'        => 'subscribed',
            ]);

print_r($result);