//comentar ask 
const fs = require('fs');


//const {ask} = require ('../helpers/input.js');

async function main() {
    //const nombre = await ask ('Cuál es tu nombre?');
    const nombre=fs.readFileSync(0,'utf8').trim();    
    

console.log("Hola "+nombre);

}

main();