import api from '../api';

export const post = async (noticia) => {
  const result = await api.post('/noticias', noticia);
  return result;
};

