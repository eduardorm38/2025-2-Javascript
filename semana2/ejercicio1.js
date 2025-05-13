const {ask} = require ('../helpers/input.js');

function saludar(nombre){
    console. log(`Hola estimado(a): ${nombre}, espero tengas un buen dia.`)
}

async function main() {
let limite= Number(await ask('Hasta que nuero quieres contar'));
let i = 0;

while (i<=limite){
    console. log (i);
    i++; //es igual a (i=i+1);
    
  }
  i=limite
  while (i >=0){
    console. log(i);
    i--;
  }
  
}
const personas=[
    'Juan',
    'Pedro',
    'Maria'
];
console. log ('Ascendente');
for (let i=0; i<personas. length; i++){
    saludar(personas[i]);
}
console. log ('Descendente');
for (let i=personas. length-1; i>=0;i--){
    saludar(personas[i]);
}
//console. log('for each');
//personas. forEach((persona)=> saludar(persona));

const frutas=['Frutas','Mango','kiwi','Manzana','uvas']
const cajon = Number(await ask('¿Que cajon quieres abrir? (1-5)'));

for (let j=1; j<=5; j++){
    if (j=== cajon){
        console. log('en el cajoon hay:',frutas[j-1]);
    }
}
main();