<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $celular = $_POST['celular'] ?? '';
    $mensagem = $_POST['mensagem'];
    
    $para = "vitormdsv@hmail.com";
    $assunto = "Novo contato do portfólio";
    
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Celular: $celular\n\n";
    $corpo .= "Mensagem:\n$mensagem";
    
    $headers = "From: $email";
    
    if (mail($para, $assunto, $corpo, $headers)) {
        header('Location: obrigado.html');
    } else {
        header('Location: erro.html');
    }
}
?>