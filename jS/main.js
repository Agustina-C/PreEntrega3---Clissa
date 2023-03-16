
function validarEmail(valor){
    const emailPermitido = "@gmail.com"
    return valor.endsWith(emailPermitido)
}
function contieneCaracteresEspeciales(texto){
    const caracteresNoPermitidos = /[-,.(){}|!#/?+_*&^%$@ :;]/;
    return caracteresNoPermitidos.test(texto) || !texto
}
function contieneNumeros(texto){
    const numerosNoPermitidos = /[1234567890]/;
    return numerosNoPermitidos.test(texto) || !texto
}


class Persona{
    cliente;
    email;

    constructor() {}
    setNombre(cliente){
        this.cliente = cliente;
    }
    setEmail(email){
        this.email = email;
    }
    mostrardatos(){
        console.log(this.cliente, this.email)
    }
    
}
const persona1 = new Persona();


persona1.cliente = prompt("Ingrese el nombre de su empresa o estudio jurídico");

if(persona1.cliente){
    alert("Cliente ingresado correctamente")
   
}
else {
    alert("Debe ingresar el nombre de su empresa o estudio jurídico")
    
}
do {
    persona1.email = prompt("Ingrese su Email")
    if(validarEmail(persona1.email)){
        alert("Tu email es " + persona1.email)
    }else{
        alert("Tu direccion de Email es incorrecta, por favor ingresarla de nuevo")
    }
}while (!validarEmail(persona1.email))
