const altura = Number(prompt('ingrese su altura'))
const  peso = Number(prompt('ingrese su peso'))
let masaCorporal = (peso /(altura*altura)).toFixed(2)

alert(`su indice corporal es ${masaCorporal}`)