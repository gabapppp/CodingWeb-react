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
    let form = new FormData();
    form.append("code", code);
    form.append("language", language);
    form.append("version", version);
    return axios.post("http://localhost:8000/compiler/code", form, {
        headers: Header()
    })
}