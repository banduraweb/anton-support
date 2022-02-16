import axios from 'axios';
import config from '../config/config';

const api = axios.create({
  baseURL: config.apiUrl,
});

api.interceptors.request.use(
  (reqConfig) => {
    if (localStorage.getItem('token'))
      reqConfig.headers.Authorization =
        'Bearer ' + localStorage.getItem('token');

    return reqConfig;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use((res) => res.data);

export default api;
