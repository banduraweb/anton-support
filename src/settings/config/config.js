const dev = {
  apiUrl: 'https://powerful-peak-56207.herokuapp.com/',
};

const prod = {
  apiUrl: '/api/',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  ...config,
};
