<?php

    foreach($_POST as $key=>$value)
	{ 
		echo '<strong>'.$key.' : </strong>'.$value.'<br />';
		$msg .= '<strong>'.$key.' : </strong>'.$value.'<br />';
	}
	
	$from = $_POST['Email'];
	$to = 'drpatel8@uh.edu';
	$bcc = $from;
	$subject = $_POST['Subject'];

	//---------------------------------- email header ------------------------------//
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= "From: ". $from . "\r\n";
	$headers .= "Bcc: ". $bcc . "\r\n";	


	//---------------------------------- checking ----------------------------------//
	if(mail($to, $subject, $msg, $headers))
	{
		echo 'success msg <br>';
	}
	else
	{
		echo 'error msg <br>';
	}


	echo '<br><hr><br>';
	echo '<strong>Homepage : </strong><a href="http://lhuang33.heyuhnem.com">http://lhuang33.heyuhnem.com</a><br />';

?>