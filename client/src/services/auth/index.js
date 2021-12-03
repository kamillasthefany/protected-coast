import api from '../api';

export const authenticate = async (usuario) => {
  const result = await api.post('/autenticacao', usuario);
  return result;
};

