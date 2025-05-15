const { ask } = require('../helpers/input');

async function main(){
    const nombres = ['Ana','Roberto','Luis','Maria'];

    for(let index = 0;index<nombres.length;index++){
        if (nombres [index].length>=5){
            console. log (`${nombres[index]} tiene mas de 5 caracteres`);
        }else {
            console. log (`${nombres[index]} tiene solo ${nombres[index].length}`)
        }
    }

console.log('--------')
const nombres2=['Oscar','Ana','Luis','Eduardo','Isabel','Maria','Úrsula','Pedro']
const vocales=['a','e','i','o','u','á','é','í','ó','ú']
    for (let index1=0;index1<nombres2.length;index1++){
        const primeraletra=nombres2[index1][0].toLocaleLowerCase();
        for (let index2=0;index2<vocales.length;index2++){
            if(primeraletra===vocales[index2]){
                console. log(`${nombres2[index1]} empieza con ${vocales[index2].toUpperCase()}`);
            }        
        }
    }

    const palabrasAlReves = await ask ('Escriba una palabra\n');
    let resultado = '';

    for(let i=palabrasAlReves.length-1;i>=0;i--){
    resultado=resultado+palabrasAlReves[i];
    }
    console.log('Al revés',resultado);

}








main();