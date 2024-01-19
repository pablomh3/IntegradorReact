import { BASE_URL } from "../constants/constants"
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const formContacto = async (name, surname, email, cellphone, message) => {
    <ToastContainer/>
    try{
        const response = await axios.post(`${BASE_URL}/issues`, {
            name,
            surname,
            email,
            cellphone,
            message
        })
        toast.dark("¡Mensaje enviado!", {
            position: "bottom-center"
          });
        return response.data
    } catch (error) {
        console.log({contactoFormError: error})
        return alert("error al enviar su mensaje")
    }
}