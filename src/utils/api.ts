// src/utils/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 10000,
});

// request interceptor
api.interceptors.request.use(
    (config) => {
        // token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// response interceptor
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // global error
        const status = error.response?.status;
        let message = 'An unknown error occurred';

        if (status === 400) {
            message = 'Bad Request...';
        } else if (status === 401) {
            message = 'Unauthorized...';
            localStorage.removeItem('token');
            window.location.href = '/login';
        } else if (status === 403) {
            message = 'Forbidden...';
        } else if (status === 404) {
            message = 'Not Found...';
        } else if (status >= 500) {
            message = 'Server Error...';
        }

        return Promise.reject({ status, message, data: error.response?.data });
    }
);

export default api;
