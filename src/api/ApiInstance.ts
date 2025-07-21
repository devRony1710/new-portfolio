import axios from 'axios';

export const ApiInstanceGithub = axios.create({
  baseURL: 'https://api.github.com/users/devRony1710'
});
