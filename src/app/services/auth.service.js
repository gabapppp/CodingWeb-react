import axios from "axios";
const API_URL = "http://localhost:8000/auth/";
const register = (
    username,
    first_name,
    last_name,
    email,
    password,
    password2
) => {
    console.log({
        username,
        first_name,
        last_name,
        email,
        password,
        password2,
    })
    return axios.post(API_URL + "register/", {
        username,
        first_name,
        last_name,
        email,
        password,
        password2,
    });
};
const login = (username, password) => {
    return axios
        .post(API_URL + "login/", {
            username,
            password,
        }).then((res) => {
            if (res.data.access)
                localStorage.setItem("user", JSON.stringify(res.data))
            localStorage.setItem("username", username)
        })
};
const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("username")
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
