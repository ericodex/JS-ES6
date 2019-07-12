/*jshint esversion: 6 */

//Simples recursividade
function recursão(data){
    /** O 'if' é chamado de 'base case' ou 'terminating condition' */
    if(condição){
        return 'algo';
    } else {
        recursão(data);
    }
}

// soma sequencial
function somaSequencial(n){
    if(n===1){
        return 1;
    }else{
        return n + somaSequencial(n -1);
    }
}

console.log(somaSequencial(5));

// Fatorial com recursividade
function fatorar(n){
    if(n===1){
        return 1;
    }else{
        return n*fatorar(n-1);
    }
}


console.log(mdc(303,707));
console.log(mmc(303,707));


function mdc(a,b){
    if (b == 0){
        return a;
    }else{
        return mdc(b , a % b);
    }
}

function mmc(a,b){
    return ((a * b) / mdc(a,b));
}

function f_euclides_mmc(a,b){

    let arr = [a,b].sort( (a,b)=> a > b);
    let arre = [];
    for(let i=arr[0];i<=arr[1];i++){
      arre.push(i); 
    }
    console.log('O MMC do conjunto: [' + arre + '] é:');
    function f_mmc(cnj){
        if (cnj.length == 2){
            return mmc(cnj[0],cnj[1]);
        }else{
            ar = [mmc(cnj[0],cnj[1]),...cnj.slice(2)];
            return f_mmc(ar);
        }
    }
    return f_mmc(arre);
}

f_euclides_mmc(23, 15);



/// Algoritmo de Euclides estendido

/*********************************************
*  Recebe dois inteiros não negativos a e b
* e devolve um vetor cuja primeira posição
* é o mdc(a,b), a segunda posição é o valor u
* e a terceira o valor v tais que
*   a*u + b*v = mdc(a,b)
**********************************************/
function euclidesEX (a, b){
	var r = a;
	var r1 = b;
	var u = 1;
	var v = 0;
	var u1 = 0;
	var v1 = 1;
        // variáveis auxiliares para efetuar trocas
	var rs, us, vs, q;

	while (r1 != 0){
		q = parseInt (r / r1); // pega apenas a parte inteira
		rs = r;
		us = u;
		vs = v;
		r = r1;
		u = u1;
		v = v1;
		r1 = rs - q *r1;
		u1 = us - q*u;
		v1 = vs - q*v1;
	}

	return [r, u, v]; // tais que a*u + b*v = r et r = pgcd (a, b)
}

// Converter um texto p número recursivamente
function convert(num) {
    let chars = num.split('');

if(chars.length === 1) {
        return parseInt(chars[0])
    } else {
        let pow = chars.length -1;
        return Math.pow(10, pow) * parseInt(chars[0]) + convert(num.substr(1));
    }
}

convert('234')*2;