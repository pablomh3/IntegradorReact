import { BASE_URL } from "../constants/constants"
import axios from 'axios'


export const createUser = async (nombre, email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            email,
            password
        })
        return data
    } catch (error) {
        console.log({ createUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        console.log({ loginUserError: error })
        return alert(error.response.data.errors[0].msg)
    }
}

export const recoverPassword = async (email, code, password) =>{
    try {
        const response = await axios.patch(`${BASE_URL}/auth/password`, {
            email,
            code,
            password
          });
          return response.data;
    } catch (error) {
        return alert(error.response.data.msg);
    }
}

export const sendEmail = async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/recover`, {
        email,
      })
      return response.data
    } catch (error) {
      console.log( {SendEmailError: error} )
      return alert(error.response.data.errors[0].msg)
    }
  }