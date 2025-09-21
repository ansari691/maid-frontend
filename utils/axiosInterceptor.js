import axios from 'axios'
import { API_BASE_URL } from '../config/api';
import { TokenManager } from './tokenManager';
// Create an axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor for authentication
api.interceptors.request.use(async (config) => {
    const token = await TokenManager.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor for handling errors
api.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response?.status === 401) {
            TokenManager.clearAll(); // Clear stored tokens
            throw new Error('Session expired. Please login again.');
        }
        throw new Error(error.response?.data?.message || 'Request failed');
    }
);

export default api;