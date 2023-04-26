let nota,nota1,nota2,nota3,nota4,notafinal
nota=prompt('nombre del estudiante')
nota1=Number(prompt('ingrese nota 1'))
nota2=Number(prompt('ingrese nota 2'))
nota3=Number(prompt('ingrese nota 3'))
nota4=Number(prompt('ingrese nota 4'))
notafinal=(n1+n2+n3+n4)/4
if (notafinal<3 && notafinal >0) {
    alert('PIERDE')
}else if (notafinal<5 && notafinal>3) {
    alert('GANA')
}else if (notafinal>5) {
    alert('ingrese bien sus notas')
}