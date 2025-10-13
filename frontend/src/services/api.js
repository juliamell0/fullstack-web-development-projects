import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3000', //URL base da API
});

export default api;
