import api from "../utils/axiosInterceptor";

const housekeeperService = {
    // Add available time slot
    addTimeSlot: async (timeSlot) => {
        try {
            return await api.post('/housekeeper/time-slots', timeSlot);
        } catch (error) {
            throw error;
        }
    },

    // Get all time slots
    getTimeSlots: async () => {
        try {
            return await api.get('/housekeeper/time-slots');
        } catch (error) {
            throw error;
        }
    },

    // Add service
    addService: async (service) => {
        try {
            return await api.post('/housekeeper/services', service);
        } catch (error) {
            throw error;
        }
    },

    // Get all services
    getServices: async () => {
        try {
            return await api.get('/housekeeper/services');
        } catch (error) {
            throw error;
        }
    },
};

export default housekeeperService;