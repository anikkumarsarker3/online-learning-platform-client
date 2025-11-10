import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
})

const useAxios = () => {
    return axiosInstance;

};

export default useAxios;