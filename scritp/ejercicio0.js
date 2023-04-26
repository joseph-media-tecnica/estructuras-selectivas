let cantidad, descuento, monto, totalpagar;


//leer o asignar informacion
cantidad = parseInt(prompt(`ingresar cantidad`));

//proceso

monto = cantidad * 2000000;

if (cantidad <= 10) {
    alert("no hay descuento")
} else if (cantidad > 10 && cantidad < 20) {
    descuento = monto * 0.1
} else if (cantidad > 20 && cantidad < 30) {
    descuento = monto * 0.2
} else if (cantidad > 30) {
    descuento = monto * 0.40
};

//imprimir

totalpagar = monto - descuento;
alert("el descuento es de:" + descuento)
alert("el total a pagar es:" + totalpagar);
