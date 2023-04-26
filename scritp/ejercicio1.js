let nombre1, nombre2, edad1, edad2

//asignar informacion

nombre1 = prompt(`ingrese nombre,hermano 1`);
nombre2 = prompt(`ingrese nombre,hermano 2`);
edad1 = Number(prompt(`ingrese edad,hermano 1`));
edad2 = Number(prompt(`ingrese edad,hermano 2`));

//proceso

if (edad1 > edad2) {
    alert("el hermano mayor es ," + nombre1)

} else {
    alert("el hermano mayor es ," + nombre2)
}

