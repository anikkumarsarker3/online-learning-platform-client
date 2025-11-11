import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'http://localhost:7000'
})

const useAxiosSecure = () => {
    const { user } = useAuth();
    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use((config) => {
            // console.log(config);
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        })
        // axios interceptor response
        const responseInterceptor = axios.interceptors.response.use(res => {
            return res;
        }, err => {
            // console.log(err)
        })

        return () => {
            instance.interceptors.request.eject(requestInterceptor)
            instance.interceptors.response.eject(responseInterceptor)
        }
    }, [user])




    return instance;
};

export default useAxiosSecure;