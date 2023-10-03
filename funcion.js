//Función: sumaTres
//var sumaTres = (x) => {
    //return x + 3;
  //}

  //Función: cuidadoConElConsoleLog
//function cuidadoConElConsoleLog(nombre) {
  //  console.log(nombre);
  //  return nombre;
  //}
  //Precedencia de valores
//var a = 1;
//var b = 2;
//var c = a = b;
//console.log (c); 
//
function viajar(destino) {
    // Convierte la entrada a minúsculas para ser insensible a mayúsculas y minúsculas.
    destino = destino.toLowerCase();

    // Usa una declaración switch para simplificar el código.
    switch (destino) {
        case "brasil":
            console.log("Gire a la izquierda");
            break;
        case "argentina":
            console.log("Gire a la derecha");
            break;
        default:
            console.log("NOS PERDIMOS");
    }
}

viajar("BRASIL");


function viajar (destinos){
    if(destinos === "brasil"){
        console.log("Gire a la izquierda");

    }else if (destinos=== "Argentina"){
        console.log("Gire a la derecha");
    }else {
        console.log("NOS PERDIMOS")
    }
}

viajar("brasil");


function comer (vegetales){
    if(vegetales=== "Zanahoria"){
        console.log("Que rico");

    }else if (vegetales === "Cebolla"){
        console.log("ÑOFI");

    }else {
        console.log("QUE CARAJOS COMES VOS ASCOO");
    }

}
comer("Bife")


function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    }else
    console.log( false );
  }
  
  puedeManejar(21);



  function tienenMismaLongitud(str1, str2) {
    return str1.length === str2.length;
 }
 
 console.log(tienenMismaLongitud("hola", "adio")); // Esto imprimirá true en la consola.
console.log(tienenMismaLongitud("gatoo", "perro")); // Esto imprimirá true en la consola.
console.log(tienenMismaLongitud("hola", "mndo")); // Esto imprimirá false en la consola.
