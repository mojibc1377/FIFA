import axios from "axios";

export const request = axios.create({
    baseURL: 'https://fifa-backend-tgn1.onrender.com'
});