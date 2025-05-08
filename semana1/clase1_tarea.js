const {ask} = require ('../helpers/input.js');

async function main() {    
    const num1 = Number(await ask ('Dame un numero '));
    const num2 = Number(await ask ('Dame otro numero '));
    
    

console.log(`${num1}+${num2} = ${num1 + num2}`);
console.log(`${num1}-${num2} = ${num1-num2}`);
console.log(`${num1}x${num2} = ${num1*num2}`);
console.log(`${num1}/${num2} = ${num1/num2}`);

}

main();