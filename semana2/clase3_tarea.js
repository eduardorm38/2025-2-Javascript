const { ask } = require('../helpers/input');
// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

async function main(){
    let nombres= [];
    let edades= [];
    let opcion='';
    let i=0;
    let j=0;

     while (opcion !=3){
        opcion=await ask('¿Qué deseas hacer? \n1. Agregar ua una persona \n2. Eliminar un nombre \n3. Salir \n');

        if (opcion ==='1'){
        nom=await ask('Me puedes dar el nombre de una persona\n');
        nombres.push(nom);
        edad=await ask('Me puedes dar su edad\n') ;
        edades.push(edad);      
        console.log(`La persona ${nombres[i]} tiene ${edades[i]} años`);        
        
            if (edades[i]>='18'){
                j=j+1;
                console.log(`Hay ${j} persona(s) mayore(s) de 18`)                
            }
            i=i+1;

        }else if (opcion==='2'){
            //eliminar
            if(nombres.length===0){
                console.log('No hay personas que eliminar');
                continue;
            }else{
                let personaEliminar=await ask ('¿Que persona deseas eliminar\n');
                let index=nombres.indexOf(personaEliminar);
                if (index !== -1){
                    nombres.splice(index,1);
                    edades.splice(index,1)
                    console.log(`${personaEliminar} ha sido eliminada`)
                }else {
                    console.log('Persona no encontrada');
                }
                console.log ('Personas disponibles: ',nombres);
            }
        }else if (opcion ==='3'){
                
            console.log('Gracias vuele pronto');
                
            }else {
                console.log('Opcion no vlida ')

            }
        }
    }




main();