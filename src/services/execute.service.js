import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";

const getExecute = (fileID, customInput) => {

    let formData = new FormData();
    formData.append('fileID', fileID);
    formData.append('stdin', customInput);
    return axios.post(API_URL + "execute/", formData, {
        headers: authHeader(),
    });
};

const getFile = (id) => {
    return axios.get(API_URL + "source/" + id, { headers: authHeader() });
};
const saveFile = () => {
    return axios.post(API_URL + "source/", { headers: authHeader(), })
}
const getSource = (path) => {
    return axios.get("http://localhost:8000" + path, { headers: authHeader() })
}

const getFileList = () => {
    return axios.get(API_URL + "source/", { headers: authHeader() });
};

const executeService = {
    getExecute,
    getFile,
    getFileList,
    getSource,
    saveFile
};

export default executeService;