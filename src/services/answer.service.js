import api from '../settings/api/api';

const answer = (payload) => api.post('/user-results', payload);

const AnswerService = {
  answer,
};

export default AnswerService;
