<?php

if(isset($_POST['email']) && (!empty($_POST['email'])) ) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "consultoria@net-code.com.mx";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Comentarios: " . $_POST['mensaje'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

    echo '<div id="resultado" class="alert alert-success" role="alert">Mensaje enviado correctamente ' . $_POST["nombre"] . '. En breve atenderemos su solicitud, Gracias.</div>';

}
else{
    echo '<div id="resultado" class="alert alert-danger" role="alert">Por favor llene todos los campos!</div>';
}
?>
