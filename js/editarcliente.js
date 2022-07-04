import {editarCliente, obtenerCliente} from"./API.js"
import {validar, mostrarAlerta} from "./funciones.js"
(function(){
    //campos del formularip
    const inputNombre = document.querySelector("#nombre")
    const inputEmail = document.querySelector("#email")
    const inputTelefono = document.querySelector("#telefono")
    const inputEmpresa = document.querySelector("#empresa")
    const inputId = document.querySelector("#id")

    document.addEventListener("DOMContentLoaded", async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search)
        const idCliente  = parseInt(parametrosURL.get("id"))
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente)

        //submit al formulario
        const formulario = document.querySelector("#formulario")
        formulario.addEventListener("submit", validarCliente)
    })
    function mostrarCliente(cliente){
        console.log(cliente)
        const {email, nombre, empresa, id, telefono} = cliente
        inputNombre.value = nombre
        inputEmail.value = email
        inputEmpresa.value = empresa
        inputTelefono.value = telefono
        inputId.value = id
    }

    function validarCliente(e){
        e.preventDefault()

        const cliente = {
            //estas son las keys
            //a las key se les va a asignar el valor de las const de arriba ej: nombre:"yair galicia"
            nombre: inputNombre.value,
            email: inputEmail.value,
            telefono: inputTelefono.value,
            empresa: inputEmpresa.value,
            id: parseInt(inputId.value)
        }
        console.log(cliente)
        editarCliente(cliente)
    }
})()