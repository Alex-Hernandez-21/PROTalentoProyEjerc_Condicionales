// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let beautiful = prompt("¿Eres bellisimo/a?");
const yesBeautiful = beautiful.toLowerCase() == "si";

if (yesBeautiful){
    console.log("Ciertamente");
    document.write("Ciertamente...");
}else{
    console.log("No te creo!");
    document.write("No te creo !");
}

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let number = parseInt(prompt("Por favor digite un número: "));
let result = number % 2;

if(result == 0){
    console.log("El número "+ number + " es divisible entre 2");
    document.write("El número "+ number + " es divisible entre 2");
}else{
    console.log("El número "+ number + " no es divisible entre 2");
    document.write("El número "+ number + " no es divisible entre 2");
}

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let numberPar = parseInt(prompt("Por favor digite un número: "));
let resultPar = number % 2;

if(resultPar == 0){
    alert("El número es par")
}else{
    alert("El número es impar")
}

//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let opcion = parseInt(prompt("Ingrese un número: "));

if (opcion == 1000){
    document.write("Ganaste un premio");
}else{
    document.write("Lo sentimos, sigue participando")
}

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numberOne = parseInt(prompt("Por favor ingrese el primer número: "));
let numberTwo = parseInt(prompt("Ingrese el segundo número diferente al primero: "));

if (numberOne < numberTwo){
    console.log("El número "+ numberOne + " Es menor")
}else{
    console.log("El número "+ numberTwo + " Es menor")
}

//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let number_one = parseInt(prompt("Por favor ingrese el primer número: "));
let number_two = parseInt(prompt("Ingrese el segundo número: "));
let number_three = parseInt(prompt("Ingrese el tercer número: "));

if (number_one > number_two && number_two > number_three){
    console.log("El número "+ number_one + " Es mayor");
}else if(number_two > number_one && number_one > number_three){
    console.log("El número "+ number_two + " Es mayor");
}else if(number_three > number_one && number_one > number_two){
    console.log("El número "+ number_there + " Es mayor");
}else if(number_one == number_two || number_two == number_three || number_three == number_one){
    console.log("Los números son iguales");
}
