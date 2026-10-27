<?php
require 'vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

$campos = [
    'marca', 'modelo', 'acessorio', 'cor', 'armazenamento',
    'ram', 'sistema', 'conectividade', 'preço', 'lançamento',
    'fabricante', 'tela', 'camera', 'carregador', 'observações'
];

foreach ($campos as $i => $campo) {
    $sheet->setCellValueByColumnAndRow($i + 1, 1, $campo);
}

foreach ($campos as $i => $campo) {
    $valor = $_POST[strlower(string: $campo)];
    $sheet->setCellValueByColumnAndRow($i + 1, 2, $valor);
}

$writer = new Xlsx($spreadsheet);
$writer->save('cadastro_celulares.xlsx');

echo "cadastro realizado com sucesso!";
?>