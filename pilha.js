var elementos = [];
var topo = -1;
const MAX = 10;

function push(num){ //empurra(add)
	if(topo < MAX){
		topo = topo + 1;
		elementos[topo] = num;
	}else{
		console.log("Pilha está cheia");
	}
}

function estaVazia(){
	return topo == -1;
}

function pop(){ //retira elemento da pilha
	if(topo != -1){
		let num = elementos[topo];
		topo = topo -1;
		return num;
	}else{
		console.log("Pilha está vazia");
	}
} 

// --- Parte do código que usa a pilha ---//
push(10);
push(20);
push(30);

console.log(`elementos da pilha: ${elementos}`);
console.log(pop());
console.log(pop());
console.log(pop());

//-- Transformação decimal pra binario usando pilha --//

var numDecimal = 10;
var resto;

while (numDecimal != 0){ //empilhando
	resto = parseInt(numDecimal % 2); //parseInt par assegura que o número seja inteiro
	push(resto);
	numDecimal = parseInt(numDecimal / 2);
}

while(!estaVazia){//desempilhando
	console.log(pop());
}





