console.log("Conectado");

let nombreUsuario = prompt("Bienvenido a Guarida de Lobos, por favor ingresá tu nombre:");
alert("Bienvenido " + nombreUsuario);


let edad = prompt("Ingrese su edad:");

if (edad >= 18){
    alert("Bienvenido, ¿qué curso o experiencia querés comprar hoy?")
} else {
    alert("Sos menor de edad, recordá que para comprar necesitás una autorización de un adulto.")
};