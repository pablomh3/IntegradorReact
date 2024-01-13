import { BASE_URL } from "../constants/constants"
import axios from 'axios'

export const formContacto = async (name, email, phone, message) => {

    try{
        const response = await axios.post (`${BASE_URL}/issues/`, {
            name,
            email,
            phone,
            message
        })
        return response.data
    } catch (error) {
        console.log({contactoFormError: error})
        return alert("error al enviar su mensaje")
    }
}