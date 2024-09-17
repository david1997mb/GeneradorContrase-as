let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
function generarPassword() {
    let digitado = parseInt(cantidad.value);
    if (digitado < 5 || digitado >12){
        alert("La Cantidad de Caracter no debe ser menor a 5 ni mayor a 12");
        cantidad.value = '';
    }
    else {
        let password = '';
        for (let i = 0; i < digitado; i++) {
            let caracter = caracteres[Math.floor(Math.random() * caracteres.length)];
            password += caracter;
        }
        contrasena.value = password;
        cantidad.value = '';
        document.getElementById('lista').removeAttribute("hidden");
        document.getElementById('title_contra').removeAttribute("hidden");
        const lista = document.getElementById('lista__contrasenas');
        const elemento = document.createElement('li');
        const boton = document.createElement('button');
        boton.setAttribute('Class','boton_lista')
        elemento.textContent = password;
        boton.textContent = 'Eliminar';
        lista.appendChild(elemento);
        lista.appendChild(boton);
        boton.onclick = function() {
            elemento.remove();
            boton.remove();
        }
    }
    
}

