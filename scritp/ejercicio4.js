let pasaje, placa, dienerototal, nusuarios, pasaje2, placa2, dienerototal2, nusuarios2;


//asignar informacion

nusuarios = Number(prompt("Ingrese numero de pasajeros tranportados"));
placa = (prompt("Ingrese placa del vehiculo"));
pasaje = Number(prompt("Ingrese valor del pasaje"));
nusuarios2 = Number(prompt("Ingrese numero de pasajeros tranportados,bus 2"));
placa2 = (prompt("Ingrese placa del vehiculo,bus 2"));
pasaje2 = Number(prompt("Ingrese valor del pasaje,bus 2"));


// proceso

dienerototal = pasaje * nusuarios;
dienerototal2 = pasaje2 * nusuarios2;
if (dienerototal > dienerototal2) {
    alert("la placa del que mas recaudo dinero(bus 1):" + placa);
    alert("El total del dinero recogido es(bus 1):" + dienerototal);
} else {
    alert("la placa del que mas recaudo dinero(bus2):" + placa2);
    alert("El total del dinero recogido es(bus2):" + dienerototal2);
}


