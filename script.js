const container = document.getElementById("container");
const colors = ["#e74c3c", "#1a2be8", "#911a89", "#3cd6d1", "#80f05d"]; //colores de eleccion
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div"); //creo un elemento  para html y le añade la clase square , que la tenemos en css
    square.classList.add("square");
    /* a container le voy agregar el div que cree con clase square */
    square.addEventListener("mouseover", () => setColor(square)); // cuando el mouse pasa sobre el cuadro

    square.addEventListener("mouseout", () => removeColor(square)); // cuando deja el cuadro

    container.appendChild(square);
    // a container le voy agregar el div que cree con clase square
}

function setColor(square) {
    const color = getRandomColor(); //llamo a la funcion que da los colores aleatorios
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; // stylos cuando es selecionado el cuadro y da el clor aleatorio
}

function removeColor(square) {
    square.style.background = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000"; // cuando se deja el cuadro se regresan a los estilos ya definidos
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]; // Del Array  de colors Math .floor me redondea un numero aqui le pasamos Math random me da un numero aleatorio entre 0 y 1 y lo  multiplica por la longotud de mi array
}
