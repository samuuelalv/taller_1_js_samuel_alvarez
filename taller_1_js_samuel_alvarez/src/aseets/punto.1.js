let num1 = Number(prompt('ingrese el primer numero'))
let num2 = Number(prompt('ingrese el segundo numero'))

const suma = num1 + num2

if(suma > 0) {
alert('es un numero positivo')
} else if (suma === 0) {
    alert('es cero')
} else {
    alert('es un numero negativo')
}
console.log(suma)