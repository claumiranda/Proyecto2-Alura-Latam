let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;
    // esta función se invoca al momento de que el usuario hace click en el botón

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto);

    // arreglos, los arreglos en JS comienzan con la posición "0"
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);
    // push = agrega los elementos ingresados a la lista, cada vez que adiciono un elemento este se va agregando a la lista

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    // Alerta si el gasto es mayor a $15000
    if (valorGasto > 15000) {
        alert("¡Alerta! Gasto registrado: $ " + valorGasto);
    }

    actualizarListaGastos();
    // llama a la función
}

function actualizarListaGastos() {
    // este const llama al "ul" que se encuentra en el html
    const listaElementos = document.getElementById("listaDeGastos");
    // creación de una lista la cual va a mostrar los datos ingresados
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
    
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];

        htmlLista +=
         `<li> ${elemento} : $ ${valorGasto.toFixed(2)} <br> Descripción: ${descripcionGasto}
          <button onClick="modificarGasto(${posicion});">Modificar</button>
         <button onClick="eliminarGasto(${posicion});">Eliminar</button>
         </li>`;

        totalGastos += valorGasto;
        // calcula el total de gastos
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcionGasto").value = "";
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
    document.getElementById("valorGasto").value = listaValoresGastos[posicion];
    document.getElementById("descripcionGasto").value = listaDescripcionesGastos[posicion];

    // Obtener el botón de agregar
    const botonAgregar = document.getElementById("btnAgregar");

    // Cambiar el texto y la función del botón
    botonAgregar.innerText = "Actualizar Gasto";
    botonAgregar.onclick = function() {

        // Actualiza los gastos
        listaNombresGastos[posicion] = document.getElementById("nombreGasto").value;
        listaValoresGastos[posicion] = Number(document.getElementById("valorGasto").value);
        listaDescripcionesGastos[posicion] = document.getElementById("descripcionGasto").value;

        // Vuelve a actualizar la lista
        actualizarListaGastos();

        // Restablecer el botón a "Agregar Gasto"
        botonAgregar.innerText = "Agregar Gasto";
        botonAgregar.onclick = clickBoton;
    };
}