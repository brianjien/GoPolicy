import axios from 'axios';

export const loginUser = async (loginData: any) => {
 //port 8080
  const response = await axios.post('/api/v1/login', loginData);
  return response.data;
};

export const registerUser = async (registerData: any) => {
  const response = await axios.post('/api/v1/register', registerData);
  return response.data;
};