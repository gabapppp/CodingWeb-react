import axios from "axios";

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access) {
        return { Authorization: 'Bearer ' + user.access };
    } else {
        return {};
    }
}

export const executeCode = (code, language, version) => {
    return axios.post("http://localhost:8000/compiler/code", { code, language, version }, {
        headers: Header()
    })
}