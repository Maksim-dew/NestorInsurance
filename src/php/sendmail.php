<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $number = htmlspecialchars(trim($_POST['number']));

    // Указываем email получателя
    $to = "maksim.medvedev0307@mail.ru";
    $subject = "Новая заявка с сайта";
    
    // Формируем текст сообщения
    $message = "Имя: $name\n";
    $message .= "Email: $email\n";
    $message .= "Телефон: $number\n";

    // Указываем заголовки письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Ошибка при отправке сообщения";
    }
}
?>
