<?php

	Print "Quantos clientes você vai cadastrar?\n";
		$n = trim(fgets(STDIN));
//Inicio Cadrastro dos Clientes
	print "____________Cadastro do Cliente____________\n\n";
	
	For($i=0;$i<$n;$i++){
		
		print "Digite o nome do " . ($i +1) . "º Cliente:\n";
		$nome[$i] = trim(fgets(STDIN)); 		
	}
	
	For($i=0;$i<$n;$i++){
	
		print "Digite o telefone do " . ($i +1) . "º Cliente:\n";
		$tel[$i] = trim(fgets(STDIN));
	}
	
	For($i=0;$i<$n;$i++){
	
		print "Digite o tipo de conta do " . ($i +1) . "º Cliente:\n";
		$tipo[$i] = trim(fgets(STDIN));
	}
	
	For($i=0;$i<$n;$i++){
	
		print "Digite quantos pulsos foram gastos pelo " . ($i +1) . "º Cliente:\n";
		$pulsosc[$i] = trim(fgets(STDIN));
	}
//Inicio cadastro Tabela de preços
	print "_______Cadastro da tabela de preço________\n\n";
	
	for($i=0;$i<3;$i++){
		print "Digite o valor da assinatura do tipo " . $i . ".\n";
		$valores[$i][0] = trim(fgets(STDIN)); 
		print "Digite o valor do pulso adcional para a assinatura do tipo " . $i . ".\n";
		$valores[$i][1] = trim(fgets(STDIN));
	}

//Imprime tabela completa calculando o valor da conta.
	print "_______   Tabela Completa  ________\n\n";
	
	print "Nome  -  Telefone  -  Tipo  -  Pulsos  -  ValorDaConta\n";
	
	For($i=0;$i<$n;$i++){
		if($pulsosc[$i]<=90){
			$vconta[$i] = $valores[$tipo[$i]][0];	
		}
		if($pulsosc[$i]>90){
			$vconta[$i] = $valores[$tipo[$i]][0] + ($valores[$tipo[$i]][1] * ($pulsosc[$i]-90));
		}
	
		print ($nome[$i] . " - " . $tel[$i] . " - " . $tipo[$i] . " - " . $pulsosc[$i] . " - " . $vconta[$i] ."\n");
	
	}
	print "_________________________________________\n\n";

//Inicia variaveis de contagem.
	$maisbarato = $vconta[0];
	$somavcontatipoum = 0;
	$ContTipo1 = 0;
	$NaoPulExced = "|";
	$ContTipo2 = 0;
	$ContMaior120 =0;
	
//Calcula Respostas
	For($i=0;$i<$n;$i++){
// 2)		
		if($vconta[$i] < $maisbarato){
			$maisbarato = $vconta[$i];
			$textmaisbarato = $nome[$i] . " - " . $tel[$i];
		}
// 3)		
		if($tipo[$i]==1){
			$ContTipo1 = $ContTipo1 +1;
			$somavcontatipoum = $somavcontatipoum + $pulsosc[$i];
		}
// 4)
		if($pulsosc[$i]<=90){
			$NaoPulExced = $NaoPulExced . "| " . $nome[$i] . " " . $tel[$i] . " |";
		}
// 5)		
		if($pulsosc[$i]>120){
			$ContMaior120 = $ContMaior120 +1;
		}
// 6)		
		if($tipo[$i]==2){
			$ContTipo2 = $ContTipo2 +1;
		}
	}
//Imprime respostas	
	Print "1) A receita total da empresa é :" . array_sum($vconta) . "\n";
	print "2) Nome do cliente e telefone do qual a conta foi mais barata: " . $textmaisbarato . "\n";  
	print "3) Média de pulsos consumidos por clientes de conta tipo 1: " . ($somavcontatipoum / $x) . "\n";
	print "4) Nome e telefone dos cliente que não consumiram pulsos excedentes: " . $NaoPulExced . "\n";
	print "5) A quantidade de clientes que consumiram acima de 120 pulsos: " . $ContMaior120 . "\n";
	print "6) A quantidade de clientes que possuem conta do tipo 2, em relação ao total de clientes:" . ($ContTipo2 / $n) . "\n";
	 
?>