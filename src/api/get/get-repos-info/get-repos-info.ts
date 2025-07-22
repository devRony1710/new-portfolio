import { ApiInstanceGithub } from '@/api/ApiInstance';
import { isAxiosError } from 'axios';

export interface ReposInfoContract {
  id: number;
  name: string;
  description: string;
  homepage: string;
}

export const getReposInfo = async (): Promise<ReposInfoContract[]> => {
  try {
    const response = await ApiInstanceGithub.get('/repos');
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw error;
  }
};
