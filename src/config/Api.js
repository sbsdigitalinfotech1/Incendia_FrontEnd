import axios from 'axios';

const BASE_URL = 'http://192.168.11.153:3001/v1/';
export const IMAGE_URL = 'http://192.168.11.153:3001/';

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

export const VerifyOtpAPI = async(data)=>{
    return await axios.post(`${BASE_URL}user/verifyOTP`,data);
}

export const resetPassword = async(data)=>{
    return await axios.post(`${BASE_URL}user/resetPassword`,data);
}

export const generateGuestId = async(data)=>{
    return await axios.get(`${BASE_URL}user/generateGuestId`,data);
}

// get api
export const getAddress = async(userId)=>{
    return await axios.get(`${BASE_URL}user/getAddress?userId=${userId}`);
}

export const getFavourite = async(userId)=>{
    return await axios.get(`${BASE_URL}user/getFavourite?userId=${userId}`);
}

export const getProducts = async(data)=>{
    return await axios.get(`${BASE_URL}user/getProducts?page=${data?.page}&pageSize=${data?.pageSize}&id=${data?.id}`);
}

// post api
export const addAddress = async(data)=>{
    return await axios.post(`${BASE_URL}user/addAddress`,data);
}

// update api
export const updateAddress = async(data)=>{
    return await axios.patch(`${BASE_URL}user/updateAddress`,data);
}

export const updateFavourite = async(data)=>{
    return await axios.patch(`${BASE_URL}user/updateFavourite`,data);
}

