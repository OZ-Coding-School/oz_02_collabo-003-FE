import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const apiInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(error);

    return Promise.reject(error);
  },
);

export default apiInstance;
