const preguntas = [
    {
        pregunta: "¿De qué país es originario el queso brie?",
        opciones: ["Berlín", "Madrid", "París", "Lisboa", "Francia"],
        respuesta: "Francia"
    },
    {
        pregunta: "¿Cuál es la moneda de México?",
        opciones: ["Libras", "Euro", "Peso mexicano", "Dolar"],
        respuesta: "Peso mexicano"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Julio Cortázar"],
        respuesta: "Gabriel García Márquez"
    }, 
	{
	pregunta: "¿De qué colores es la bandera de Japón?",
	opciones: ["Amarillo y  rojo", "Blanco y azul", "Blanco y rojo"],
	respuesta: "Blanca y rojo"

}
];

let preguntaActual = 0;
let respuestaSeleccionada = '';

// Elementos del DOM
const elPregunta = document.getElementById('pregunta');
const elOpciones = document.querySelectorAll('.opcion');
const elSubmitBtn = document.getElementById('submit-btn');
const elResultado = document.getElementById('resultado');

function cargarPregunta() {
    elPregunta.innerText = preguntas[preguntaActual].pregunta;

    elOpciones.forEach((boton, index) => {
        boton.innerText = preguntas[preguntaActual].opciones[index];
        boton.classList.remove('selected'); // Remover clase si es necesario
        boton.style.backgroundColor = ""; // Reinicia el color de fondo
        boton.onclick = () => seleccionarOpcion(boton);
    });
}

function seleccionarOpcion(boton) {
    elOpciones.forEach(op => op.classList.remove('selected')); // Limpiar selección anterior
    boton.classList.add('selected'); // Resaltar la opción seleccionada
    respuestaSeleccionada = boton.innerText;
    boton.style.backgroundcolor = "#0056b3"
}

function submitAnswer() {
    if (respuestaSeleccionada === '') {
        elResultado.innerText = 'Por favor selecciona una opción.';
        return;
    }

    if (respuestaSeleccionada === preguntas[preguntaActual].respuesta) {
        elResultado.innerText = '¡Correcto!';
    } else {
        elResultado.innerText = 'Incorrecto. La respuesta correcta es: ' + preguntas[preguntaActual].respuesta;
    }

    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        setTimeout(() => {
            elResultado.innerText = '';
            respuestaSeleccionada = '';
            cargarPregunta();
        }, 2000);
    } else {
        setTimeout(() => {
            elResultado.innerText = 'Fin del juego!';
        }, 2000);
    }
}

// Agregamos el event listener al botón de enviar respuesta
elSubmitBtn.addEventListener('click', submitAnswer);

// Cargamos la primera pregunta al iniciar el juego
window.onload = cargarPregunta;