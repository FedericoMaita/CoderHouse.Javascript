let nombreUsuario = (prompt("Antes de continuar, ingrese su nombre por favor "));
alert("Bienvenido/a  " + nombreUsuario + "!")

let edadUsuario = (prompt("A continuacion, ingrese solo el numero de su edad por favor "));
alert("Estimado/a  " + nombreUsuario+" usted ha selecionado que tiene " + edadUsuario + " años ")

if (edadUsuario >= 18 ) {
    alert("Estimado/a  " + nombreUsuario + " le informamos que usted es mayor de edad.");
} else {
    alert("Estimado/a  " + nombreUsuario + " le informamos que usted todavia no es mayor de edad.")}
