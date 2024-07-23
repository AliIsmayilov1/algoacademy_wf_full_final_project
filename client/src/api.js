const axios = require("axios")

const API_URL = "http://localhost:5000/api/SignUp"

export const userInfo = async(firstname,lastname,age,gender)=>{
    try{
        const response = await axios.post(API_URL,{firstname,lastname,age,gender})
        return response.data
    }
    catch(error){
        throw error.response.data;
    }
}