

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

// Fatorial com recursividade
function fatorar(n){
    if(n===1){
        return 1;
    }else{
        return n*fatorar(n-1);
    }
}

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

console.log(mdc(303,707));
console.log(mmc(303,707));

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