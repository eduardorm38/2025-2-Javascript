const {ask} = require ('../helpers/input.js');

async function main() {    
    const age = Number(await ask('cuantos años tienes?'));

    if (age <=12){
        console. log("Eres un niño");
    }else if(age>12 && age <=18){
        console. log("Eres un adolecente");
    }else if (age>18 && age <=60){
        console. log ("Eres un adulto");
    }else{
        console. log ("Eres un adulto mayor");
    }

}
main();