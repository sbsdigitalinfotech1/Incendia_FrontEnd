import axios from "axios";
import Cookies from "js-cookie";

// export const BASE_URL = 'http://192.168.11.153:3001/v1/';
const BASE_URL = "https://incendiabackend.pipeandsection.com/v1/";
// export const IMAGE_URL = 'http://192.168.11.153:3001/';
export const IMAGE_URL = "https://incendiabackend.pipeandsection.com/";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
});

// Add a request interceptor to include the Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(Cookies.get("userData"));
    var token;
    if(userData){
      token = userData?.token;
    }
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// auth api's

export const register = async (data) => {
  return await axios.post(`${BASE_URL}user/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${BASE_URL}user/login`, data,{withCredentials: true});
};

export const sendOTP = async (data) => {
  return await axios.post(`${BASE_URL}user/sendOTP`, data);
};

export const verifyRegistration = async (data) => {
  return await axios.post(`${BASE_URL}user/verifyRegistration`, data);
};

export const VerifyOtpAPI = async (data) => {
  return await axios.post(`${BASE_URL}user/verifyOTP`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${BASE_URL}user/resetPassword`, data);
};

export const generateGuestId = async (data) => {
  return await axios.get(`${BASE_URL}user/generateGuestId`, data);
};

// get api

export const getAddress = async (userId) => {
  return await apiClient.get(`${BASE_URL}user/getAddress`);
};

export const getFavourite = async (userId) => {
  return await apiClient.get(`${BASE_URL}user/getFavourite`);
};

export const getProducts = async (data) => {
  return await axios.get(
    `${BASE_URL}user/getProducts?page=${data?.page}&pageSize=${data?.pageSize}&id=${data?.id}`
  );
};

// post api

export const addAddress = async (data) => {
  return await apiClient.post(`${BASE_URL}user/addAddress`, data);
};

// update api

export const updateAddress = async (data) => {
  return await apiClient.patch(`${BASE_URL}user/updateAddress`, data);
};

export const updateFavourite = async (data) => {
  return await apiClient.patch(`${BASE_URL}user/updateFavourite`, data);
};

// cart api's

export const addToCart = async (data) => {
  return await axios.post(`${BASE_URL}user/addToCart`, data);
};

export const removeFromCart = async (data) => {
  return await axios.post(`${BASE_URL}user/removeFromCart`, data);
};

export const getCart = async (guestId) => {
  return await axios.get(`${BASE_URL}user/getCart?guestId=${guestId}`);
};

export const updateCart = async (data) => {
  return await axios.patch(`${BASE_URL}user/updateCart`, data);
};

// Filter product api's

export const getCategory = async(data) =>{
    return await axios.get(`${BASE_URL}user/getCategory`, data);
}
export const getAvailableColorsAndSizes = async() =>{
    return await axios.get(`${BASE_URL}user/getAvailableColorsAndSizes` );
}
export const getProductsFiltered = async(data) =>{
    return await axios.get(`${BASE_URL}user/getProductsFiltered?sort=${data?.sort}&page=${data?.page}&pageSize=${data?.pageSize}&size=${data?.size}&categoryId=${data?.categoryId}&colorName=${data?.colorName}`);
}

// order api's
export const makeOrder = async(data) =>{
  return await apiClient.post(`${BASE_URL}user/makeOrder`, data);
}

export const getOrders = async(data) =>{
  return await apiClient.get(`${BASE_URL}user/getOrders?userId=${data?.userId}&orderId=${data?.orderId}` );
}
