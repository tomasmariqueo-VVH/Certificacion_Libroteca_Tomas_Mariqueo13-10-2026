console.log("Conexión con JS exitosa")

/* BOTONES DE INICIO Y REGISTROooo */
let iniciarSesion = document.querySelector("#login");
let registrarse = document.querySelector("#register");

iniciarSesion.addEventListener("click", function() {
    alert(`Inicio de sesión exitoso!`)
});

registrarse.addEventListener("click", function() {
    alert(`Registro completado, bienvenido!`)
});

/* TITULO CAMBIANTEnt */
let nombreTitulo = document.querySelector("#titulo");
let Ficcion = document.querySelector("#ficcion");
let Historicos = document.querySelector("#historia");
let Tecnologia = document.querySelector("#tecnologia");
let autoAyuda = document.querySelector("#autoayuda");
let Poesia = document.querySelector("#poesia");

Ficcion.addEventListener("click", function(){
    nombreTitulo.innerText = "Ficción"
});

Historicos.addEventListener("click", function(){
    nombreTitulo.innerText = "Históricos"
});

Tecnologia.addEventListener("click", function(){
    nombreTitulo.innerText = "Tecnología"
});

autoAyuda.addEventListener("click", function(){
    nombreTitulo.innerText = "Autoayuda"
});

Poesia.addEventListener("click", function(){
    nombreTitulo.innerText = "Poesía"
});

/* BOTONES DE RENTAs */

let renta1 = document.querySelector("#rentar1");
let renta2 = document.querySelector("#rentar2");
let renta3 = document.querySelector("#rentar3");

renta1.addEventListener("click", function(){
if (renta1 !== null) { //El botón existe?
        if (this.textContent === "Rentar") {
            this.textContent = "No disponible"
            this.style.backgroundColor = "red"
            this.style.color = "white";
        } else {
            this.textContent = "Rentar"
            this.style.backgroundColor = "#9FC5F8"
            this.style.color = "black";
        }
    } else { //El botón no existe
        console.log("El botón no existe");
    }
});

renta2.addEventListener("click", function(){
if (renta2 !== null) { //El botón existe?
        if (this.textContent === "Rentar") {
            this.textContent = "No disponible"
            this.style.backgroundColor = "red"
            this.style.color = "white";
        } else {
            this.textContent = "Rentar"
            this.style.backgroundColor = "#9FC5F8"
            this.style.color = "black";
        }
    } else { //El botón no existe
        console.log("El botón no existe");
    }
});

renta3.addEventListener("click", function(){
if (renta3 !== null) { //El botón existe?
        if (this.textContent === "Rentar") {
            this.textContent = "No disponible"
            this.style.backgroundColor = "red"
            this.style.color = "white";
        } else {
            this.textContent = "Rentar"
            this.style.backgroundColor = "#9FC5F8"
            this.style.color = "black";
        }
    } else { //El botón no existe
        console.log("El botón no existe");
    }
});