import { ApiInstanceGithub } from '@/api/ApiInstance';
import { isAxiosError } from 'axios';

export const getGithubUserInfo = async () => {
  try {
    const response = await ApiInstanceGithub.get('');
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw error;
  }
};
