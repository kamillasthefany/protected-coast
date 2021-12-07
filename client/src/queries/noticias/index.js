import { useQuery } from 'react-query';
import { post, get } from '../../services/noticia';

export const useListarNoticias = () => {
  const { isLoading, data, isError } = useQuery("noticias", () =>
    get()
  );
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};

export const useSalvarNoticia = (noticia) => {
  console.log('noticia', noticia);
  const { isLoading, data, isError } = useQuery("salvar-noticias", (noticia) =>
    post(noticia)
  );
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};

