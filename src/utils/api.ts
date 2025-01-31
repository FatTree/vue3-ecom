// src/utils/api.ts
import axios, { HttpStatusCode } from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 10000,
});

enum HttpStatus {
    OK = HttpStatusCode.Ok,
    CREATED = HttpStatusCode.Created,
    BAD_REQUEST = HttpStatusCode.BadRequest,
    UNAUTHORIZED = HttpStatusCode.Unauthorized,
    FORBIDDEN = HttpStatusCode.Forbidden,
    NOT_FOUND = HttpStatusCode.NotFound,
    INTERNAL_SERVER_ERROR = HttpStatusCode.InternalServerError
}
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

        if (status === HttpStatus.BAD_REQUEST) {
            message = 'Bad Request...';
        } else if (status === HttpStatus.UNAUTHORIZED) {
            message = 'Unauthorized...';
            localStorage.removeItem('token');
            window.location.href = '/login';
        } else if (status === HttpStatus.FORBIDDEN) {
            message = 'Forbidden...';
        } else if (status === HttpStatus.NOT_FOUND) {
            message = 'Not Found...';
        } else if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
            message = 'Server Error...';
        }

        return Promise.reject({ status, message, data: error.response?.data });
    }
);

export default api;
