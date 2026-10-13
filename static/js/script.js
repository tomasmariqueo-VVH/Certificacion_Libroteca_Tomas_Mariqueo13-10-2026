console.log("Conexión con JS exitosa")

/* BOTONES DE INICIO Y REGISTRO */
let iniciarSesion = document.querySelector("#login");
let registrarse = document.querySelector("#register");

iniciarSesion.addEventListener("click", function() {
    alert(`Inicio de sesión exitoso!`)
});

registrarse.addEventListener("click", function() {
    alert(`Registro completado, bienvenido!`)
});

/* TITULO CAMBIANTE */
let nombreTitulo = document.querySelector("#titulo");
let Ficcion = document.querySelector("#ficcion");
let Historicos = document.querySelector("#historia");
let Tecnologia = document.querySelector("#tecnologia");
let autoAyuda = document.querySelector("#autoayuda");
let Poesia = document.querySelector("#poesia");