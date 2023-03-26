input.onButtonPressed(Button.B, function () {
    Elección = randint(0, Opciones.length - 1)
    basic.showString("" + (Opciones[Elección]))
})
let Elección = 0
let Opciones: string[] = []
Opciones = [
"Ir al cine",
"Ir al club a bailar",
"Ir a un restaurante",
"Ir al Pub",
"Quedarse en casa y hacer previa"
]
