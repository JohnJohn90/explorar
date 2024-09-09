// function operaciones(n1, n2, operacion) {
// switch(operacion) {
//     case "suma":
//         return console.log(n1 + n2);
//     case "resta":
//         return console.log(n1 - n2);
//     case "multiplicacion":
//         return console.log(n1 * n2);
//     case "division":
//         return console.log(n1 / n2);
//     default:
//         console.error("valorinvalido");    
// }
// }
// operaciones(12, 2, "resta");



// function numPar(a = 0, b = 0) {
//     let matriz = [];
//     for(let i=a; i<=b; i++) {
//         if (i % 2 === 0) {
//             matriz.push(i);
            
//         }        
//     }
//     console.log(matriz);
// }
// numPar(0, 10);

// function tabla(a = 0, x = 10,) {
//     let resultado;
//     for(let i=1; i<=x; i++) {
//         resultado = i * a;
//         if (i!==5) {
//             console.log(`${i} x ${a} = ${resultado}`);
//         }    
//     }
// }
// tabla(2);

// function multiplosDe3(){
//     let matriz = [];
//     let multiplos = [];
//     for(let i=1; i<=100; i++) {
//        matriz.push(i);       
//     }
//     console.log(`Este es el arreglo principal: ${matriz}`);
//     matriz.filter((a)=> {
//         if (a % 3 === 0) {
//             multiplos.push(a);
//         }
//     })
//     console.log(`Este es elarreglo de multiplos de 3: ${multiplos}`)
// }
// multiplosDe3();

// function azar(){
//    let numeroAleatorio = Math.floor(Math.random()*100)+1
//    let mitad = numeroAleatorio/2;
//    let doble = numeroAleatorio*2;
//    let raiz = Math.sqrt(numeroAleatorio);
//    console.log(`El numero aleatorio es  ${numeroAleatorio}, la mitad es ${mitad}, 
// el doble es ${doble} y la raiz cuadrada es ${raiz} `); 
   
// }
// azar();

// function cumpleaños(a = "12 dec 2024") {
//     let cumple = new Date(a);
//     let fechaActual = new Date();
//     let diasRestantes = Math.floor((cumple.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24));
//     console.log(`El cumpleaños es el ${cumple} y faltan ${diasRestantes} dias`);
// }
// cumpleaños();

// function dividirPalabrasArreglo(txt = "Hola mundo") {
//     let palabras = txt.split(" ")
//     console.log(palabras);
// }
// dividirPalabrasArreglo();

// function arregloNombreEdad() {
//     const matriz = [
//         {
//             nombre: 'john',
//             apellido: 'mazorra',
//             edad: 17
//         },
//         {
//             nombre: 'carlos',
//             apellido: 'mazorra',
//             edad: 48
//         },
//         {
//             nombre: 'alberto',
//             apellido: 'mazorra',
//             edad: 70
//         },
//         {
//             nombre: 'yeni',
//             apellido: 'galezo',
//             edad: 43
//         },
//         {
//             nombre: 'nicol',
//             apellido: 'tami',
//             edad: 16
//         }
//     ]
//     console.log(matriz);
//     console.log("TODOS LOS NOMBRES JOHN");
//     matriz.filter((elemento) => {
//         if (elemento.nombre === 'john') console.log(`${elemento.nombre} ${elemento.apellido}`);
//     });
//     console.log("TODOS LOS APELLIDOS MAZORRA");
//     matriz.filter((elemento) => {
//         if(elemento.apellido === "mazorra") console.log(`${elemento.nombre} ${elemento.apellido}`);
//     })    
//     console.log("MAYORES DE EDAD");
//     matriz.filter((elemento) => {
//         if (elemento.edad >= 18) console.log(`${elemento.nombre} ${elemento.apellido} - ${elemento.edad} años`);
//     })   
// }
// arregloNombreEdad()

// function tiempoRestanteExamen(a = "9 sep 2024 00:00") {
//     let fechaActual = new Date();
//     let fechaExamen = new Date(a);
//     let horasRestantes = Math.floor((fechaExamen.getTime() - fechaActual.getTime()) / (1000*60*60))
//     console.log(horasRestantes)
// }
// tiempoRestanteExamen();


function tabla(a,x) {
    let resultado;
    for(let i=0; i<=x; i++) {
        resultado = i * a;
        
        if(i!==5) {
            console.log(`${i} X ${a} = ${resultado}`)
        }
    }
    
}
tabla(2,10);