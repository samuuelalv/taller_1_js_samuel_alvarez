console.log('Conectando taller 1 javaScrip punto 6')

alert('Bienvenido al sistema social de becas ')

const edad = Number(prompt('Ingrese la edad del estudiante'))
const prom = Number(prompt('Ingrese el promedio de notas del estudiante'))

if (edad > 18 ) {
    if (prom >= 9)
    alert('La beca del estudiante será de $200.000')
    console.log('La beca del estudiante será de $200.000')
    }else if (prom >= 7.5){
    alert('La beca del estudiante será de $100.000')
    console.log('La beca del estudiante será de $100.000')
    }else if (prom >= 6 && prom < 7.5){
    alert('la beca del estudiante sera de $50.000')
    confirm.log('la beca del estudiante sera de $50.000')
    }else if (prom < 6){
    alert('Invitamos al estudiante a que estudie más para el próximo ciclo escolar')
    console.log('Invitamos al estudiante a que estudie más para el próximo ciclo escolar') 
    }else if (edad <= 18 ) 
        if (prom >= 9) {
        console.log('La beca del estudiante será de $300.000')
        alert('La beca del estudiante será de $300.000')
    }else if (prom < 9 && prom >= 8) {
        console.log('La beca del estudiante será de $200.000')
        alert('La beca del estudiante será de $200.000')
    } else if (prom >= 6 &&  prom < 8) {
        console.log('La beca del estudiante será de $100.000')
        alert('La beca del estudiante será de $100.000')
    }else if (prom < 6 ) {
        alert('Invitamos al estudiante a que estudie más para el próximo ciclo escolar')
        console.log('Invitamos al estudiante a que estudie más para el próximo ciclo escolar')
    }