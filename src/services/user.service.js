import api from '../settings/api/api';

const login = (payload) => api.post('/user/signin', payload);
const createUser = (payload) => api.post('/user/signup', payload);

export const UserService = {
  login,
  createUser,
};
