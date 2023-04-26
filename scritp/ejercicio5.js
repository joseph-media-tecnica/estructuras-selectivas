let  ruta, placa, nusuarios, total;

//asignar informacion

ruta = Number(prompt("ingrese la ruta de servicio(A=1 o B=2)"));
placa = (prompt("ingrese placa del vehiculo"));
nusuarios = Number(prompt("ingrese numero de pasajeros tranportados"));

//proceso


if (ruta == 1) {
    total = nusuarios * 1200
    alert("Su ruta fue A,el valor es de: 1200 y el total es:" + total)
} else {
    total = nusuarios * 1000
    alert("Su ruta fue B,el valor es de: 1000 y el total es:" + total)
}




