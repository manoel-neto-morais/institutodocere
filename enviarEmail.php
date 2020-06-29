<?php

$assunto = $_POST['assunto'];   
$corpo = "
 Nome:      ".$_POST['nome']."
 Telefone:  ".$_POST['tel']."
 Assunto:   ".$_POST['assunto']."
 E-mail:    ".$_POST['email']."
 Mensagem:  ".$_POST['menssagem']."
";

mail("manoel.neto.morais@gmail.com", $assunto, $corpo, "From: ".$_POST['tel']);

echo "Dados enviados com sucesso!";

?>
