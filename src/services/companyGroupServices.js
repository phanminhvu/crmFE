import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL // Replace with your API base URL

const CompanyGroupServices = {
    getAllItems: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/CompanyGroup?pageNumber=1&pageSize=1000`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching items');
        }
    },

    createItem: async (newItem) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/CompanyGroup`, newItem);
            return response.data;
        } catch (error) {
            throw new Error('Error creating item');
        }
    },

    updateItem: async (itemId, updatedItem) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/CompanyGroup/update/${itemId}`, updatedItem);
            return response.data;
        } catch (error) {
            throw new Error('Error updating item');
        }
    },

    deleteItem: async (itemId) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/CompanyGroup/delete/${itemId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error deleting item');
        }
    }
};

export default CompanyGroupServices;
