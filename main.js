/**
Exercise #1
Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

Return the value of what she should be paying.
 */
// (() =>{
//     let num_transacciones = prompt("Indica el numero de transacciones");
//     trasanccion(num_transacciones);
// })();

function trasanccion(num_transacciones){
    var transacciones = null;
    var total = null; 
    transacciones = num_transacciones*3;
    console.log(transacciones);
    for(let i = 0; i<num_transacciones;i++){
        let pagos = prompt(`Ingresa el monto de la transaccion ${i+1}`);
        total = Number(total)+Number(pagos);
        console.log(total)
    }
    total += transacciones;
    total = total+(total*0.01);
    alert(`El total de a pagar es: ${total} dolares`);
}

/*
Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
*/ 

function ingresarNombres(){
    let nombre1 = prompt("Ingresa el primer nombre: ");
    let nombre2 = prompt("Ingresa el segundo nombre: ");
    let nombre3 = prompt("Ingresa el tercer nombre: ");
    alert(`Bienvenidos ${nombre1}, ${nombre2}, ${nombre3}.`);
}

/*
Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30 */
// (() => {
//     let fecha = prompt("Ingresa el año en que naciste: ");
//     calcularEdad(fecha);
// })();
function calcularEdad(fecha){
    let resultado = 2022-fecha;
    return alert(`Tu edad en el 2022 es ${resultado} `)
}

/*Part 3
Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}. */
(()=>{
    let numero = prompt("Ingresa el numero de participantes: ");
    for(let i =0; i<numero; i++){
        let nombre = prompt("Cual es tu nombre: ");
        let edad = prompt("Cual es tu edad: ");
        saludar(nombre,edad);
    }
})()
function saludar(nombre,edad){
    mensaje = `Welcome ${nombre}, you are ${edad}`;
    return alert(mensaje)
}