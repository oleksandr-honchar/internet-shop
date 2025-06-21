// Функції для роботи з бекендом

import axios from 'axios';
// import { sortUserPlugins } from 'vite';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const getCategoryService = async () => {
  try {
    const { data: response } = await axios(
      `${axios.defaults.baseURL}products/category-list`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
