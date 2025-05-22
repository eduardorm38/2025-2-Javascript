// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.
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
   
       function aprobados(numeros) {     
     let apro=0;
     for (let i = 0; i < numeros.length; i++) {
       if (numeros[i] >= 70) {
         apro = apro + 1;
       }
     }
     return apro;
    }

         function reprobados(numeros) {
     let repro=0;
     for (let i = 0; i < numeros.length; i++) {
       if (numeros[i] < 70) {
         repro = repro + 1;
       }
     }
     return repro;
    }



    function analizarCalificaciones(numeros){
        const mayor=obtenerMayor(numeros);
        const menor=obtenerMenor(numeros);
        const promedio=obtenerPromedio(numeros);
        const apro=aprobados(numeros);
        const repro=reprobados(numeros);

        return{menor,mayor,promedio,apro,repro};

    }

async function main(){
    let opcion = 0;
    const alumnos =[];

    while(opcion !== 3){
        opcion = Number ( await ask(`Selecciona la opcion deseada \n 1.Agregar alumano.\n2.Mostrar resultados\n3.Salir`));
        if(opcion === 1 ){
            const nombre = await ask(`introduce la edad del alumno`);
            const edad = Number(await ask(`introduce la edad`));
            const calificacion = Number(await ask(`introduce la califiacion`));
            alumnos.push({nombre, edad, calificacion});
        }else if(opcion === 2){
            const calificaciones=[];
            for(let i = 0; i < alumnos.length; i++){
                calificaciones.push(alumnos[i].calificacion);
            }
            console.log(analizarCalificaciones(calificaciones));
        }
    }



}
main();
