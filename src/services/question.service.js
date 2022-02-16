import api from '../settings/api/api';

const question = () => api.get('/question');
const createQuestion = (payload) => api.post('/question', payload);

export const QuestionService = {
  question,
  createQuestion,
};

