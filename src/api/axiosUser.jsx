import axios from "axios";

const user = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000/api/"
});

export default user;


