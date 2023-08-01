import axios from "axios";

export const request = axios.create({
    baseURL: 'http://localhost:8000',

});
export const REQUEST = axios.create({
    baseURL: 'http://localhost:8000',
	headers: {"content-type": "application/json"}
})
// https://fifa-backend-tgn1.onrender.com
