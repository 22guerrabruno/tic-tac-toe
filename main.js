const turno = {
  TURNO_X: "❌",
  TURNO_O: "🟢",
};
const casillas = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const ganador = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let juegoActivo = true;
let turnoActual = turno.TURNO_X;
const muestraTurno = document.getElementById("turno");
const anunciaGanador = document.getElementById("ganador");

muestraTurno.innerHTML = `ES EL TURNO DE: ${turnoActual}`;

function handleClick(id) {
  if (juegoActivo === true) {
    for (let i = 0; i < casillas.length; i++) {
      let tablero = document.getElementById(i);
      tablero.innerHTML = casillas[i];
    }
  } else {
    return;
  }
  const casilla = document.getElementById(id);
  if (casilla.innerHTML === " ") {
    casillas[id] = turnoActual;
    casilla.innerHTML = turnoActual;
    console.log(casillas);
    compruebaTableroLleno();
    compruebaGanador();
  } else {
    return;
  }
  if (turnoActual === turno.TURNO_X) {
    turnoActual = turno.TURNO_O;
    muestraTurno.innerHTML = `ES EL TURNO DE: ${turnoActual}`;
  } else {
    turnoActual = turno.TURNO_X;
    muestraTurno.innerHTML = `ES EL TURNO DE: ${turnoActual}`;
  }
}

function compruebaGanador() {
  for (const combo of ganador) {
    const [a, b, c] = combo;
    if (casillas[a] === " " || casillas[b] === " " || casillas[c] === " ") {
      continue;
    }
    if (
      casillas[a] &&
      casillas[a] === casillas[b] &&
      casillas[a] === casillas[c]
    ) {
      console.log("Ganador" + casillas[a]);
      juegoActivo = false;
      anunciaGanador.innerHTML = `GANADOR: ${casillas[a]}`;
    } else {
    }
  }
}
function compruebaTableroLleno() {
  if (!casillas.includes(" ")) {
    juegoActivo = false;
    anunciaGanador.innerHTML = `EMPATE`;
  }
}
function reiniciar() {
  juegoActivo = true;
  turnoActual = turno.TURNO_X;
  casillas.fill(" ");
  anunciaGanador.innerHTML = "";
  muestraTurno.innerHTML = `ES EL TURNO DE: ${turnoActual}`;
  for (let i = 0; i < casillas.length; i++) {
    let tablero = document.getElementById(i);
    tablero.innerHTML = casillas[i];
  }
}
