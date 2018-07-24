<?php
if ($_POST['phone']!='' and $_POST['name']!='' and $_POST['mail']!='') {

	$_POST["mail"] =  substr(htmlspecialchars(trim($_POST['mail'])), 0, 100);
	$mail = $_POST["mail"];

	$_POST["phone"] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
	$phone = $_POST["phone"];

	$_POST["name"] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
	$name = $_POST["name"];

	$_POST["company"] =  substr(htmlspecialchars(trim($_POST['company'])), 0, 100);
	$company = $_POST["company"];

	$_POST["website"] =  substr(htmlspecialchars(trim($_POST['website'])), 0, 100);
	$website = $_POST["website"];

	$_POST["business"] =  substr(htmlspecialchars(trim($_POST['business'])), 0, 100);
	$business = $_POST["business"];

	$_POST["subject"] =  substr(htmlspecialchars(trim($_POST['subject'])), 0, 200);
	$subject = $_POST["subject"];

	$_POST["message"] =  substr(htmlspecialchars(trim($_POST['message'])), 0, 200);
	$message = $_POST["message"];


	include('MailChimp.php');

	use \DrewM\MailChimp\MailChimp;

	$MailChimp = new MailChimp('648a24043ffd8640fa4b06c5c51cf50d-us17');

	$list_id = 'fae1aae1d0';

	$result = $MailChimp->post("lists/$list_id/members", [
	    'email_address' => $email,
	    'status'        => 'subscribed',
	]);

	$to  = "dmitriokulov@yandex.ru";
	$subject = "Заявка с nodepower.com";
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";

	$message = '
	<html>
		<head>
		</head>
		<body>
		<div style="background-color: #fff; color: #000; padding-top: 10px; padding-bottom: 20px; font-family: Tahoma; font-size: 18px; width: 100%; text-align: center;">
			<p>Поступила новая заявка</p><br>
			<div style="width: 500px; margin:0 auto;">
				<div style="text-align: left">
					<p><b>Name:</b> '.$name.'</p>
					<p><b>Phone:</b> '.$phone.'</p>
					<p><b>Mail:</b> '.$mail.'</p>
					<p><b>Phone:</b> '.$company.'</p>
					<p><b>Business:</b> '.$business.'</p>
					<p><b>Subject:</b> '.$subject.'</p>
					<p><b>Message:</b> '.$message.'</p>
				</div>
			</div>
		</div>
		</body>
	</html>';

	if (mail($to, $subject, $message, $headers)) {
		echo 'success';
	} else {
		echo 'error-2';
	}

}
