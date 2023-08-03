import axios from "axios";

export const request = axios.create({
    baseURL: 'https://fifa-backend-tgn1.onrender.com',

});
export const REQUEST = axios.create({
    baseURL: 'https://fifa-backend-tgn1.onrender.com',
	headers: {"content-type": "application/json"}
})

// https://fifa-backend-tgn1.onrender.com
