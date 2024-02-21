<?php

/*
instalar o composer no link:https://getcomposer.org/Composer-Setup.exe
*/

require __DIR__ . 'C:/xampp/phpMyAdmin/vendor/autoload.php';


$spreadsheetId = 'Produto_1';


$range = 'tabela 1'; 

$client = new \Google_Client();
$client->setApplicationName('Conversor csv');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig(__DIR__ . '/credentials.json');

$service = new Google_Service_Sheets($client);
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();

$fp = fopen('tabela_php.csv', 'w');
foreach ($values as $row) {
    fputcsv($fp, $row);
}
fclose($fp);
?>
