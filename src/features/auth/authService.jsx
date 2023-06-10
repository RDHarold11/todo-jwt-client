import axios from "axios";

const API_URL = "https://todoapi-pk3v.onrender.com/api/user/";
/* const API_URL = "http://localhost:5000/api/user/" */

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "register", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
