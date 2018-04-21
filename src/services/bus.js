import axios from 'axios';

export default {
  load: async (query) => {
    try {
      const response = await axios.get('');  
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  find: async (id) => {
    try {
      const response = await axios.get('');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}