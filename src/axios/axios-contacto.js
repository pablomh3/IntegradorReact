import { BASE_URL } from "../constants/constants"
import axios from 'axios'

export const formContacto = async (name, surname, email, cellphone, message) => {

    try{
        const response = await axios.post(`${BASE_URL}/issues`, {
            name,
            surname,
            email,
            cellphone,
            message
        })
        alert("Mensaje enviado!")
        return response.data
    } catch (error) {
        console.log({contactoFormError: error})
        return alert("error al enviar su mensaje")
    }
}