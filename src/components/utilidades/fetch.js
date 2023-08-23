
const API_KEY = '57af88bb365e369ab95af85948e34389' //


export default async function fetchApiFuncion (valor) {//si necesito enviarle parametros puedo hacerlo como con cualquier funcion

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=${API_KEY}&units=metric&lang=sp`)
        const data = await response.json()

        return Promise.resolve(data) //retorno la promesa de la peticion realizada
    }
    catch (error){
        return Promise.reject(error)
    }

   

}

//esta funcion sirve para hacer la llamada a la api! 