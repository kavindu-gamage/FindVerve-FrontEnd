import { AxiosError } from "axios";
import axiosUser from "../api/axiosUser";

export const logIn = async (userCredentials) => {
    try {
        const {data} = await axiosUser.post("/auth/login", userCredentials);
        return Promise.resolve(data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const e = error;
            if(e.response && e.response.data){
                return Promise.reject(e.response.data.message)
            }
        }else if (error instanceof error){
            return Promise.reject(error.message)
        }
    }
};