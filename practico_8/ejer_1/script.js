let uno = 1;
let dos = uno; //el valor de la variable 2 siempre va a ser el mismo que el valor de la variable 1
uno = 2;


alert("Bienvenidos")

let nombre = prompt("Ingrese su nombre")

alert("Bienvenido " + nombre)

let edad = prompt("ingrese su edad")
edad = parseInt(edad);

while (isNaN(edad)){
    alert("la edad ingresada no es valida");
    edad = prompt("ingrese su edad")
} 

    
alert("Nombre: " + nombre + " Edad: " + edad);

