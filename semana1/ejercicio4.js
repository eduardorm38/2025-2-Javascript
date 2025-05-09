const {ask} = require ('../helpers/input.js');
function obtenerMayor(a,b){
    if (a>b){
        return a;
    }else {
        return b;
    }
}
async function main() {    
    const num1 = Number(await ask('Introduce el primer numero '));
    const num2= Number(await ask ("Introduce el segundo numero "));
    if (num1===num2) {
        console. log ("Los numeros que ingresaste son iguales");
    } else {
    const resultado= obtenerMayor=(num1,num2);
    console. log ("el numero mayor es: ", resultado);
            
    }


   

}
main();