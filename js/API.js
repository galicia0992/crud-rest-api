const url = "http://localhost:4000/clientes"

//crear nuevo cliente
export const nuevoCliente = async cliente =>{
    try {
       await  fetch(url, {
            method:"POST",
            //body es el como enviamos la informacion en este caso es en string
            body:JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            }
        })
        //envia al usuario directo a la pantalla de inicio si el registro se hizo correctamente
        window.location.href = "index.html"
    } catch (error) {
        console.log(error)
    }
}

//se trae a todos los clientes
export const obtenerClientes = async() =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//eliminar un registro
export const eliminarCliente = async id=>{
    try {
       await fetch(`${url}/${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error)
    }
}

//obtener cliente por su ID
export const obtenerCliente = async(id) =>{
    try {
        const resolve = await fetch (`${url}/${id}`)
        const data = await resolve.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//actualiza un registro
export const editarCliente = async (cliente)=>{
    try {
         await fetch(`${url}/${cliente.id}`,{
            //la url es http://localhost:4000/clientes y cliente.id es /28 y quedaria http://localhost:4000/clientes/28
            method:"PUT",
            body:JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            }
        })
        window.location.href ="index.html"
    } catch (error) {
        console.log(error)
    }
}