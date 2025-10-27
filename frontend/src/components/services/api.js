import axios from 'axios';

//Configuração da instância do Axios com a URL base da API
const api = axios.create({
    baseURL: "https://localhost:3000",
});
export default api;