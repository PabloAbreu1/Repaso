alert("FUNCIONA PORFAVOR")

// ej 1



// let ensaladadefrutas = ["Banana", "Manzana", "Kiwi", "Pera", "Frutilla"];
// for (let i = 0; i < ensaladadefrutas.length; i++) {
//     console.log(`Las frutas que hay en la ensalada son:` +
//         ensaladadefrutas[i])
// }

// Ejercicio 2: Promedio de edad



// let edades = [12, 13, 14, 15, 16, 17]
// let Promedio = 0
// let sumado = 0

// for (let i = 0; i < edades.length; i++) {
//     sumado += edades[i]
// }
// Promedio = sumado / edades.length;
// console.log("El promedio es" + Promedio)

// Ejercicio 3: Mis amigos.



// let amigos = ["Ryan", "Kieran", "Mark", "Miguel"]
// let mjs = [];
// for (let i = 0; i < amigos.length; i++) {
//     if (amigos[i].length <= 4); {
//         mjs.push(amigos[i]);
//     }
// }
// console.log(mjs);

// Ejercicio 4: Métodos de arrays.



// const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.push("Shampoo")
// listaDeSuper.shift()
// console.log(listaDeSuper);
// console.log(listaDeSuper.length)
// console.log(listaDeSuper.indexOf("Shampoo"))

// Ejercicio 5: Mi primera función


// function saludo() {
//     alert("bienvenida al visitante");
// }

// Ejercicio 6: Calculando el mayor



// function calculoMayor(num1, num2) {
//     if (num1 === num2) {
//         alert(num1 + " es igual que " + num2)
//     } else if (num1 > num2) {
//         alert(num1 + " es mayor que " + num2)
//     } else if (num1 < num2) {
//         num2 + " es mayor que " + num1
//     }
// }
// console.log(calculoMayor(3, 3));

// Ejercicio 7: Mis amigos.



const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]

function filtrarAmigos(arr) {
    const amigofilt1 = amigo1.filter(amigo1 => amigo1.length === 4)
    console.log(amigofilt1)

}