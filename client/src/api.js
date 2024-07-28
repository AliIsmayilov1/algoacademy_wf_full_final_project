import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const registerUser = async (firstname, lastname, age, gender) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      firstname,
      lastname,
      age,
      gender,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const loginUser = async (username, password) => {
  try {
      const response = await axios.post('/login', { username, password });
      return response.data;
  } catch (error) {
      throw error.response.data;
  }
};