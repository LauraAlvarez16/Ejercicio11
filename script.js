// DOM: Obtener elementos
let tablero = document.getElementById("tablero");
let boton_play = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");
let text_hora = document.getElementById("h");
let text_minuto = document.getElementById("m");
let text_segundo = document.getElementById("s");

// Estados Cronometro
let esta_activo = false; 
let time = { //variable de tipo objeto
    decimas: 0,
    segundos: 0,
    minutos: 0
}

// Funcion Actualizar
function formato(numero) { //Modifica los numeros cuando son menores de 10
    if (numero < 10) {
        return "0" + numero;
    }
    else {
        return numero;
    }
}

function actualizar() {
    time.decimas++; //incrementa en 1
    if (time.decimas == 10) {
        time.decimas = 0; //vale 1
        time.segundos++;
    }
    if (time.segundos == 60) {
        time.segundos = 0;
        time.minutos++;
    }
    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}` //se modifica el formato html por el valor que esta ahi 0:0:1
    
    if (esta_activo == true) {
        setTimeout(actualizar, 100); //Esperar un intervalo de tiempo y volver a ingresar a la función
    }
}

// Funciones Botones
function play() { //Se ejecuta cuando se da play
    if (esta_activo == false) {
        esta_activo = true;
        actualizar();
    }
}
function pause() { //cuando el estado esta en false no va se va ha ejecutar
    esta_activo = false;
}
function reset() {//Restablece lo que inicialmente se tenia en el tableri
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}
    `}
// Escuchar Eventos
boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause);
boton_reset.addEventListener('click', reset);