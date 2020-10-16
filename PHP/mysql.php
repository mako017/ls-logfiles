<?php
include "config.php";

$data = json_decode(file_get_contents('php://input'));

var_export($data);

$sql = $mysqli->prepare("INSERT INTO `LogfilesLisa` (VPCode, Grp, Log) VALUES (?, ?, ?)");


$sql->bind_param("sis", $data->lsf, implode("\t", $data->response));

$sql->execute();

$sql->close();