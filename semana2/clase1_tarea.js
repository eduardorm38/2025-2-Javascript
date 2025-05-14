//Practica para casa
//imprimir numeros pares del 1 al 100

const { ask } = require('../helpers/input');

async function main(){

for (let i = 0 ; i <= 100 ; i ++) {
    if (i%2===0 && i != 0){
    console. log(i);
    }else{
        console. log('')
    }   
}
}

main();

// for (let j = 1; j <= 5; j++) {
//    if (j === cajon) {
//      console.log("En el cajón hay: ", frutas[j - 1]);
//    }
//  }
//}

//main();