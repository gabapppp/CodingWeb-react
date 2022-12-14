import axios from "axios";

const API_URL = "http://localhost:8000/auth/";

const register = (
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password
) => {
    return axios.post(API_URL + "register/", {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
    });
};


const login = (username, password) => {
    return axios
        .post(API_URL + "login/", {
            username,
            password,
        })
        .then((response) => {
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;