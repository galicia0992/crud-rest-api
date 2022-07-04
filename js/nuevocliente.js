import {mostrarAlerta, validar} from"./funciones.js"
import {nuevoCliente} from "./API.js"
(function(){
    const formulario = document.querySelector("#formulario")
    formulario.addEventListener("submit", validarCliente)

    function validarCliente(e){
        e.preventDefault()
        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono = document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value

        const cliente = {
            //estas son las keys
            //a las key se les va a asignar el valor de las const de arriba ej: nombre:"yair galicia"
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            mostrarAlerta("Todos los campos son obligadotios")
            return
        }
        nuevoCliente(cliente)
    }
})()