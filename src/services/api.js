import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://poc-tcc-fastify.onrender.com/`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

const getUsers = async () => {
  try {
    const response = await apiClient.get('users')

    return response.data
  } catch (err) {
    console.log(err)
  }  
}

const createUser = async ({ name, email }) => {
  return await apiClient.post('users', { name, email });
}

export const apiServices = {
  createUser,
  getUsers
}