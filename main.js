//Introcuccion a java 
//ejercicio 2
{let a = 5;
let b = 10;
let c = a + b;
console.log(c);}
//ejercicio 3
{let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombre);}
//Operadores logios y condicionales 
//ejercicio 1
let a = 6;
let b = 5;
let c = 14;
let mayor;
if(a>b && a>c){
    mayor = a;
}else if(b>a && b>c){
    mayor = b;
}else{
    mayor = c;
} console.log("el numero mayor es: "+mayor)
//ejercicio 2 
{let numero = prompt("ingrese un numero y te dire si es par o impar");
if(numero % 2 === 0){
    console.log(numero +" es par")
}else{
    console.log(numero+" es impar")
}}
//Operadores de asignación y bucles
//ejercicio 1 
{let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}}
//ejercicio 2
let numero;

do {
    numero = prompt("Ingrese un número mayor a 100:");
} while (numero <= 100); 

console.log("El número mayor a 100 es: " + numero);
//Funciones de JavaScript
//ejercicio 1
function esPar(num){ 
    return num % 2 ===0;
}
console.log(esPar(4));  
console.log(esPar(7));  
console.log(esPar(0));  
//ejercicio 2 
function convertirCelsiusAFahrenheit(c) {
    let f = c * 1.8 + 32;
    console.log(c + "°C son " + f + "°F");
}
convertirCelsiusAFahrenheit(0);    
convertirCelsiusAFahrenheit(25);  
convertirCelsiusAFahrenheit(100);
//Objetos en JavaScript
//ejercicio 1 
{
let persona = {
    nombre: "Luciano",
    edad: 22,
    ciudad: "Barcelona",
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};
// Muestra el estado inicial del objeto persona
console.log("Antes de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
// Llamada al método para cambiar la ciudad
persona.cambiarCiudad("Rosario");
// Muestra el estado actualizado del objeto persona
console.log("Después de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
}
//ejercicio 2
{
let libro = {
    titulo: "los nacidos de la bruma",
    autor: "Brandon Sanderson",
    año: 2006,
    esAntiguo: function() {
        let añoActual = 2024;
        let añosDesdePublicacion = añoActual - this.año; 
        return añosDesdePublicacion > 10;
    }
};
if (libro.esAntiguo()) {
    console.log(`El libro "${libro.titulo}" es antiguo.`);
} else {
    console.log(`El libro "${libro.titulo}" es reciente.`);
}
}
//Arrays
//ejercicio 1 
{
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2); 
}
console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);
}
//ejercicio 2
let pares=[];
for(let i=1;i<=20;i++){
    if(i%2 ===0){
        pares.push(i)
    }
}
console.log("el array esta compuesto por: "+ pares);
//Introducción al DOM
//ejercicio 1
/*const boton = document.getElementById("boton");

function cambiarColor() {
    document.getElementById("parrafo1").style.color = "blue";
    document.getElementById("parrafo2").style.color = "blue";
    document.getElementById("parrafo3").style.color = "blue";
}
boton.onclick = cambiarColor;*/

const botonej1 = document.querySelector("#boton");
botonej1.addEventListener("click",(e) =>{
    let alltext = document.querySelectorAll(".text")
    alltext.forEach((item, index) => {
        item.style.color = "blue";
    });
});

//ejercicio 2 
const formalert = document.querySelector("#formularioalert");
formalert.addEventListener("submit",(e) =>{
   e.preventDefault();
   let texto = document.querySelector("#textoinput").value;
   alert("has ingresado: "+ texto)
});
//Eventos en DOM
//ejercicio 1 
const ul1=document.querySelectorAll("#ul1 li");
ul1.forEach(li =>{
    li.addEventListener("click",(e)=>{
        console.log(li.textContent)
    })
})
//Ejercicio 2
const inputdes= document.querySelector("#textoinputdes");
const btndesc=document.querySelector("#des");
const btnhab=document.querySelector("#hab");
btndesc.addEventListener("click",(e)=>{
    inputdes.setAttribute("disabled", "disabled")
})
btnhab.addEventListener("click",(e)=>{
    inputdes.removeAttribute("disabled")
})
//LocalStorage
//Ejercicio 1
const formulariolocal= document.querySelector("#formulariolocal");
formulariolocal.addEventListener("submit",(e) =>{
   e.preventDefault();
   let correo = document.querySelector("#correo").value;
   localStorage.setItem("correousuario", correo);
   let div = document.querySelector("#divcorreo")
   div.style.display="block"
   document.querySelector("#divcorreo p").textContent=correo;
});
const btnremov = document.querySelector("#borrar")
btnremov.addEventListener("click",(e)=>{
    localStorage.removeItem("correousuario");
    document.querySelector("#divcorreo p").textContent="";
})
const correoguardado = localStorage.getItem("correousuario");
if (correoguardado) {
    let div = document.querySelector("#divcorreo")
   div.style.display="block"
   document.querySelector("#divcorreo p").textContent=correoguardado;
}




const h1 = document.getElementById("h1element");
let newTexto="Cambiado con javascript";
h1.textContent=newTexto;