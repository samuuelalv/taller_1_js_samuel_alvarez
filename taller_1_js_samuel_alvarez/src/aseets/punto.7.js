console.log('contectando taller 1 java scrip punto 7')
alert('Bienvenido al cine')

const num = prompt(
  'Estamos en estreno de cuatro pelicuas en el teatro ingrese un numero del 1 al 4 segun la funcion que desea conocer'
)

if (Number(num) === 1) {
  console.log(
    'La primera pelcula es Batman, su categoría es acción y el valor de entrada es 5,000'
  )
  alert(
    'La primera pelcula es Batman, su categoría es acción y el valor de entrada es 5,000'
  )
} else if (Number(num) === 2) {
  console.log(
    'La segunda película es Los Vengadores, su categoría es acción y el valor de la entrada es 10,000'
  )
  alert(
    'La segunda película es Los Vengadores, su categoría es acción y el valor de la entrada es 10,000'
  )
} else if (Number(num) === 3) {
  console.log(
    'La tercera película es SuperCool, su categoría es comedia y el valor de la entrada es 8,000.'
  )
  alert(
    'La tercera película es SuperCool, su categoría es comedia y el valor de la entrada es 8,000.'
  )
} else if (Number(num) === 4) {
  console.log(
    'la cuarta película es rápido y furioso 5, subcategoría es de  aventura eso valor de entrada es 15,000'
  )
  alert(
    'la cuarta película es rápido y furioso 5, subcategoría es de aventura eso valor de entrada es 15,000'
  )
} else if (Number(num) < 1 || Number(num) > 4) {
  console.log('Ingrese una opcion valida')
  alert('Ingrese una opcion valida')
}