<?php

if (isset($_POST['submit'])) {
    $name = trim($_POST['name']);
    $name = htmlspecialchars($name);

    $email = trim($_POST['email']);
    $email = htmlspecialchars($email);

    $message = trim($_POST['message']);
    $message = htmlspecialchars($message);

    if (empty($name)) {
         $errors[] = 'Впишите Ваше имя';
    }

 if (empty($email)) {
         $errors[] = 'Впишите Ваш email';
    }



    elseif (empty($message)) {
        $errors[] = 'Вы забыли написать сообщение';
    }
    
    if (empty($errors)) {
        echo "Спасибо! <br>Ваше сообщение успешно отправлено Денису.<br><hr>\n";

        echo "<b>Ваше имя:</b>{$name}<br>\n";
        echo "<b>Ваш email:</b>{$email}<br>\n";
        echo "<b>Ваше сообщение:</b>{$message}<br><hr>";
        
    }
    else {
        foreach ($errors as $error) {
            echo $error;
        }
    }
}
?>