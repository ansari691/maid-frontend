import { API_ENDPOINTS } from '../config/api';
import api from '../utils/axiosInterceptor';
import { TokenManager } from '../utils/tokenManager';

const authService = {
    register: async (userData) => {
        try {
            const data = await api.post(API_ENDPOINTS.auth.register, userData);
            
            // Store token and user data
            if (data.token) {
                await TokenManager.setToken(data.token);
                await TokenManager.setUser(data.user);
            }
            
            return data;
        } catch (error) {
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const data = await api.post(API_ENDPOINTS.auth.login, { email, password });
            
            // Store token and user data
            if (data.token) {
                await TokenManager.setToken(data.token);
                await TokenManager.setUser(data.user);
            }

            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default authService;