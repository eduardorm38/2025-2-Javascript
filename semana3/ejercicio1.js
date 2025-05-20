const { ask } = require('../helpers/input');

async function main() {

    const persona =[
        {
        nombre:'claudia',
        edad:34,
        profesion:'desarrollador',
        saludar: function(){
            console.log(`Hola mi nombre es ${this.nombre}`)
        }
    },{
        nombre:'Carlos',
        edad:28,
        ocupacion:'Estudiante',
        saludar: function(){
            console.log(`Hola mi nombre es ${this.nombre}`)
        }
         }
    ]   
    //persona.saludar();
    for (let i=0; i <persona.length;i++){
        persona[i].saludar();
    }
    const alumno={
        nombre:'juan',
        edad:18,
        ocupacion:'Estudiante',
        esMayorDeEdad:function(){
            if(this.edad>=18){return true;}
            else{return false;}
        },
        mostrarInfo: function(){
            console.log(`Hola soy: ${this.nombre}, tengo ${this.edad}, me dedico ${this.ocupacion}`);
            if(this.esMayorDeEdad()){
                console.log('y soy mayor de edad');
            }else{
                console.log('no puedo votar');
            }
        }

    }
}
main();