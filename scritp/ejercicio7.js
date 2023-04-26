let num1,num2,num3

//asignar informacion

num1=Number(prompt("Ingrese el numero 1"));
num2=Number(prompt("Ingrese el numero 2"));
num3=Number(prompt("Ingrese el numero 3"));

// proceso

if (num1>num2 && num1>num3) {
    alert("el numero 1,es mayor y es: "+ num1)
} else if (num2>num1 && num2>num3) {
    alert("el numero 2,es mayor y es: "+ num2)
} else if (num3>num1 && num3>num2) {
    alert("el numero 3,es mayor y es: "+ num3)
}