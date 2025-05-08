const {ask} = require ('../helpers/input.js');

async function main() {    
    const number =Number(await ask("Ingresa un número:"));

    if (number % 3===0 && number % 5 ===0){
        console. log ("Es multiplo de 3 y 5");
    }else if (number % 3==0){
        console. log ("Multiplo de 3")
    }else if (number%5===0){
        console. log ("Multiplo de 5")
    }else {
        console. log ("no es multiplo de 2 y 5");
    }
    //tudo:
}
main();