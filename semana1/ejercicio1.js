const {ask} = require ('../helpers/input.js');

async function main() {
    const name = await ask ('Cuál es tu nombre?');
    const age = Number(await ask ('Cuál es tu edad?'));
    const nac =(await ask ('Cual es tu fecha de nacimienti'));

console.log(`Hola ${name}, tienes ${age} años. tu fecha de nacimiento es ${nac}`);

}

main();