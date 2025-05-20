const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}
    function obtenerMayor(numeros){
        let mayor=numeros[0];
        for(let i=0;i<numeros.lenght;i++){
            if(numeros[i]>mayor){
                mayor=numeros[i];
            }
        }
        return mayor;
    }

    function obtenerMenor(numeros){
        let menor=numeros[0];
        for(let i=0;i<numeros.length;i++){
            if(numeros[i]<menor){
                menor=numeros[i];
            }
        }
    }

    function resumenEstadistico(numeros){
        const promedio=obtenerPromedio(numeros);
        const mayor=obtenerMayor(numeros);
        const menor=obtenerMenor(numeros);

        return{menor,mayor,promedio}

    }
    function nombresVocal(nombres){
       const vocales=['a','e','i','o','u','á','é','í','ó','ú']
        const nomVocal=[]
        for (let i=0;i<nombres.length;i++){
            let primeraletra=nombres[i][0].toLocaleLowerCase();
            if(vocales.includes(primeraletra)){
                nomVocal.push(nombres[i]);
            }               
        }       
        return nomVocal;
    }


    async function main(){
        const edades=[20,18,25,30,22];
        const lista = [5, 20, 8, 99, 3];
        const datos = [70, 80, 90, 100, 85];
        const nombres = ["Ana", "Esteban", "Luis", "Oscar", "María"];

        console.log(`Promedio = ${obtenerPromedio(edades)}`);
        console.log(`El numero mayor de ${lista} = ${obtenerMayor(lista)}`);
        const estadistica=resumenEstadistico(datos);
        console.log(`El resumen estadistico de: ${datos}`);
        console.log(`El numero menor es: ${estadistica.menor}`);
        console.log(`El numero mayor es: ${estadistica.mayor}`);
        console.log(`El promedio es: ${estadistica.promedio}`);
        console.log(`lista de nombres ${nombres}`)
        console.log(`Los nombres que empiezan con vocal son ${nombresVocal(nombres)}`)
    }
main();