var acciones = [
    "Salir de la casa",
    "ir a la tienda",
    "solicitar una bolsa de leche",
    "pagar al tendero",
    "regresar a la casa",
    "abrir la puerta",
    "subir al apartamento",
   
];

document.addEventListener("DOMContentLoaded", function() {
    ejecutarAccion(0);
});

function ejecutarAccion(indice) {
    var accionesDiv = document.getElementById("acciones");
    accionesDiv.textContent += acciones[indice] + "\n";
    // Incrementamos el índice para pasar a la siguiente acción
    indice++;
    // Si todavía hay acciones por ejecutar, llamamos a la función ejecutarAccion recursivamente
    if (indice < acciones.length) {
        setTimeout(function() {
            ejecutarAccion(indice);
        }, 1000); // Esperamos 1 segundo entre cada acción
    }
}
