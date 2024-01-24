/*
const card = document.querySelectorAll(".card")

const botonClickTexto = document.querySelector(".button")

botonClickTexto.onclick=()=>{
    for(let i = 0; i<card.length; i++){
        card[i].innerHTML=`
        <div class="list">
         <ul>
            <li>Hola</li>
            <li>chicas</li>
         </ul>
        </div>`
        
    }
}

for(let i = 0; i<card.length;i++){
    card[i].onclick=()=>{
        card[i].style.backgroundColor="blue"
        

    }
}*/


// const conteiner = document.querySelector(".contenedor")
// const botonClickTexto = document.querySelector(".button")


// const nombres = ["ana","laura","sebastian"]


// botonClickTexto.onclick=()=>{
//     for (let i = 0; i < nombres.length; i++) {
//         conteiner.innerHTML+=`<div class="card">${nombres[i]}</div>`
//     }
// }

// Ejercicios de acummuladoras

//  1-const numeros = [5, 7, 8, 4]
// Hacer un código que recorra el array numerosy muestre en consola la suma de todos ellos. 
// El resultado deberia ser 24.

// 2 -const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// Dado el anterior array de nombres, hacer un código que recorra todos los nombres y
//  muestre en consola el mensaje

// Ana - Elsa - Olaf - Sven - Hans - (con guiones)

//  3- Dado el mismo array, hacer un código que muestre en consola el siguiente mensaje:
// <li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>
//  4 - Dado el mismo array, hacer un código que muestre en el HTML de la página una lista ordenada,
//   con todos los nombres.
//  El "ul" ya debería estar en el HTML. El resto se debe hacer con javascript.

//1 
// const numeros = [5,7,8,4]
// let acc = 0
// for (let i =0; i<numeros.length;i++){
//     acc = acc+ numeros[i]
// }
// console.log(acc)

//  const conteiner = document.querySelector(".contenedor")
//  const boton = document.querySelector(".button")

//  boton.onclick=()=>{
//     console.log("hola")
//     for (let i = 0; i< nombres.length; i++) {
//         conteiner.innerHTML += `
//             <ul>
//                 <li>${nombres[i]}</li>
//             </ul>
//         `
//     }
//  }
// const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// console.log(nombres.splice(5,5,"kristoff"))
// console.log(nombres)

// const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
// const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// const ordenarAlfabeticamente = (array)=>{
//     let nuevoarray =array.sort()
//     return nuevoarray
// }

// console.log(ordenarAlfabeticamente(frozen))
// console.log(ordenarAlfabeticamente(moana))

// const revertirOrden = (array) => {
//     let nuevoarray = array.reverse()
//     return nuevoarray
// }
// console.log(revertirOrden(frozen))
// console.log(revertirOrden(moana))

// const incluyeNombre = (array, nombre) => {
//     if(array.includes(nombre)){
//         return true
//     }else{
//         return false
//     }
// }
 
// console.log(incluyeNombre(frozen, "Olaf"))

// const ultimosDos = (array) => {
//     let nuevoarray=array.splice(2,5)
//     return nuevoarray
// }

// console.log(ultimosDos(frozen))
// console.log(ultimosDos(moana))

// const conteiner = document.querySelector(".contenedor")
// const boton = document.querySelector(".button")

// const nombres = ["elefante","ñandú","caballo","gato","perro"]
// const recortar = (palabra, numero)=>{
//     const palabrasRecortadas = [];
//   for (let i = 0; i < palabra.length; i++) {
//     palabrasRecortadas.push(palabra[i].slice(0, numero));
//   }
//   for(let j =0; j < palabrasRecortadas.length;  j++){
//     conteiner.innerHTML += `
//     <ul>
//         <li>${palabrasRecortadas[j]}</li>
//     </ul>
//   `
//   }
// }
// boton.onclick=()=>{
//     recortar(nombres , 5)
// }



// ejercicios arrays 

// const numeros = [5, 7, 99, 34, 54, 2, 12]

// const obtenerMenor = (array)=>{
//     let menor=5
//     for(let i = 1; i<array.length; i++){
//         if(array[i]<menor){
//             menor= array[i]
//         }
//     }
//     return menor
// }
// console.log(obtenerMenor(numeros))

// const numeros = [5, 7, 10, 12, 24]

// const sumar = (array)=>{
//     let suma =0 
//     for(let i =0 ;i<array.length;i++){
//         suma += array[i]
//     }
//     return suma
// }

// console.log(sumar(numeros))

// const numeros = [5, 7, 99, 3, 4, 54, 2, 12]

// const contiene = (array,number)=>{
//     for(let i =0 ; i<array.length;i++){
//         if(array.includes(number)){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// console.log(contiene(numeros, 5))

// -------------otra forma de hacer el mismo ejercicio anterior --------------------
// const contiene = (numero,array)=>{
//     for(let i =0 ; i<array.length;i++){
//        return array.includes(numero)
//     }
// }

// contiene(54,[5, 7, 99, 3, 4, 54, 2, 12])

// function invertirCaso(str) {
//     let resultado = '';
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
      
//       if (char === char.toUpperCase()) {
//         resultado += char.toLowerCase();
//       } else {
//         resultado += char.toUpperCase();
//       }
//     }
  
//     return resultado;
// }
  
//   // Ejemplos de uso
//   console.log(invertirCaso('Ada Lovelace')); // 'aDA lOVELACE'
//   console.log(invertirCaso('feliz cumple')); // 'FELIZ CUMPLE'
//   console.log(invertirCaso('jAvAsCrIpT'));   // 'JaVaScRiPt



// // const personaje =["aragorn","Sam","Frodo","gandalf"]
// // const estanJuntos = (personajes)=>{
// //      let indiceSam=-1;
// //      let indiceFrodo=-1
// //      for(let i = 0; i<personajes.length;i++){
// //         if(personajes[i]==="sam"){
// //             indiceSam=i
// //         }if( personajes[i]==="frodo"){
// //             indiceFrodo=i
// //         }
// //     }
// //     return Math.abs(indiceFrodo-indiceSam)===1
// // }
// // console.log(estanJuntos(personaje))
// separar('🐶🐱🐶🐱🐱🐶🐶') 
// '🐶🐶🐶🐶🐱🐱🐱'

// const perrosOGatos= ['🐶','🐱','🐶','🐱','🐱','🐶','🐶']
// const perrosGatos = (string) => {
//     let perros = [];
//     let gatos = [];

//     for (let i = 0; i < string.length; i++) {
//         if(string[i]==='🐶'){
//             perros.push(string[i])
//         }else if(string[i]==='🐱'){
//             gatos.push(string[i])
//         }
//     }

//     return perros.concat(gatos);
// };

// console.log(perrosGatos(perrosOGatos));




// ------------- ejercicios metodos de arrays --------------

// const numeros = [10, 20, 30, 40, 50]


// const numerosMasDiez=(array)=>{
//     const nuevoarray=array.map((elemento) => elemento +10)
//     return nuevoarray
// }

// console.log(numerosMasDiez(numeros))

// const librosJS = ['JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming','JavaScript: The Good Parts','Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries','Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','JavaScript: The Definitive Guide','You Don’t Know JS','JavaScript Allongé: The Six Edition'];
// const frases = ['Labore sea dolor.','Justo rebum dolor.','Stet lorem amet.'];

// const enlistar = (array)=>{
//     const nuevaLista = array.map((elemento)=>elemento.length)
//     return nuevaLista
// }

// console.log(enlistar(librosJS))
// console.log(enlistar(frases))







// ------------------------------- ejercicios de matrices 

// const generarMatrizEscalonada = (filas)=>{
//     let matriz = []
//     for(let i = 0; i<= filas; i++){
//         let filas = []
//         for(let j=0 ;j < i ; j++){
//             filas.push(0)
//         }
//         matriz.push(filas)
//     }
//     return matriz
// }

// console.log(generarMatrizEscalonada(5))



// const piramide = ()=>{
//     let acc = ''
//     for(let i =0; i<5; i++){
//         acc= acc+'*'
//         console.log(acc)
//     }
//     return acc
// }

// console.log(piramide())
// const matriz2D=[[2, 7, 12, 1],[8, 23],
// [9, 45, 7],[22, 3, 24, 4],]
// const obtenerNumeroMayor = (matriz)=>{
//     let numeroMayor = matriz[0][0]
//     for (let i=0; i<matriz.length;i++){
//         for(let j=0;j< matriz[i].length; j++){
//             if(matriz[i][j]>numeroMayor){
//                 numeroMayor= matriz[i][j]
//             }
//         }
//     }
//     return numeroMayor
// }

// console.log(obtenerNumeroMayor(matriz2D))