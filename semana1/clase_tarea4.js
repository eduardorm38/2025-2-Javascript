const {ask} = require ('../helpers/input.js');

 function difDays(actuaDate, birthDate) {
    const diff=actuaDate-birthDate;
    const edadEnDias = Math. floor (diff/(1000*60*60*24))
    return edadEnDias;
    //tudo: hacer lo mismo pero con meses y años 
}
async function main (){
    const actuaDate= new Date();
    const birthDateDay =await ask ("¿Cual es tu dia de nacimiento");
    const birthDateMonth =await ask ("¿Cual es tu mes de nacimiento");
    const birthDateYear =await ask ("¿Cual es tu año de nacimiento");

    const birthDate= new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    const diff=actuaDate-birthDate;
    console. log (actuaDate.toLocaleString());
    console. log (birthDate.toLocaleString());
    console. log(`Has vivido ${difDays(actuaDate,birthDate)} dias`);
}

main();