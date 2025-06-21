//Допоміжні функції

import iziToast from 'izitoast';
import { getCategoryService } from './products-api';

export async function getCategory() {
  try {
    const data = await getCategoryService();
    return data;
  } catch (error) {
    iziToast.error('Failed to load categories');
  }
}
