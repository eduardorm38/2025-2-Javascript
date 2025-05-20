
//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja


const { ask } = require('../helpers/input');

    

    function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

    function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

    function obtenerPromedio(numeros) {
        let total = 0;
        for (let i = 0; i < numeros.length; i++) {
            total = total + numeros[i];
        }
        const promedio = total / numeros.length;

        return promedio;
    }
   // function aprobados(numeros){
   //     let apro = numeros[0];        
   //     for (let i = 0; i < numeros.lenght ; i++) {
   //         if ( numeros[i] >= 70) {
   //             apro = apro + 1
   //         }
   //     }
   //     return apro;
   // }
       function aprobados(numeros) {
     let index = numeros[0];
     let apro=0
     for (let i = 0; i < numeros.length; i++) {
       if (numeros[i] >= 70) {
         apro = apro + 1;
       }
     }
     return apro;
    }

         function reprobados(numeros) {
     let index = numeros[0];
     let repro=0
     for (let i = 0; i < numeros.length; i++) {
       if (numeros[i] < 70) {
         repro = repro + 1;
       }
     }
     return repro;
    }



    function resumenEstadistico(numeros){
        const mayor=obtenerMayor(numeros);
        const menor=obtenerMenor(numeros);
        const promedio=obtenerPromedio(numeros);
        const apro=aprobados(numeros);
        const repro=reprobados(numeros);

        return{menor,mayor,promedio,apro,repro};

    }



    async function main(){
        const noEstudiantes= '';
      // const calificaciones=[]; 
       const calificaciones = [10,70, 80, 90, 100, 85,10];       
    //     noEstudiantes = await ask('¿Cuantos estudianes vas a calificar? \n');
    //        for (i=0;noEstudiantes>i;i++){        
    //        if (noEstudiantes>i){
    //            cali = await ask('Me puedes dar la calificacion del estudiante\n');
    //            calificaciones.push(cali);             
    //        }
    //        }
        const estadistica=resumenEstadistico(calificaciones);
        console.log(`El resumen estadistico de: ${calificaciones}`);
        console.log(`La calificacion mas alta es : ${estadistica.mayor}`);
        console.log(`La calificacion mas baja es: ${estadistica.menor}`);
        console.log(`El promedio es: ${estadistica.promedio}`);        
        console.log(`El numero de reprobados son: ${estadistica.repro}`);
        console.log(`El numero de aprobados son: ${estadistica.apro}`);       
        

    }
main();