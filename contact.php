<?php
    error_reporting(E_ALL ^ E_NOTICE);

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $reason = trim($_POST['reason']);
    $message = trim($_POST['message']);



    $emailTo = 'bdnaeem3@gmail.com';
    $body = "Name: $name \n\nEmail: $email \n\nReason: $reason \n\nMessage: $message";
    $headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

    $mailed = mail($emailTo, $subject, $body, $headers);

    if($mailed==true){
       echo json_encode(array('status' => 'ok')); 
    }else{
       echo json_encode(array('status' => 'error')); 
    }
?>
