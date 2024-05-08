import axios from 'axios';

const BASE_URL = 'http://192.168.11.153:3001/v1/';

// auth api's

export const register = async(data)=>{
    return await axios.post(`${BASE_URL}user/register`,data);
}

export const login = async(data)=>{
    return await axios.post(`${BASE_URL}user/login`,data);
}

export const sendOTP = async(data)=>{
    return await axios.post(`${BASE_URL}user/sendOTP`,data);
}

export const verifyRegistration = async(data)=>{
    return await axios.post(`${BASE_URL}user/verifyRegistration`,data);
}
