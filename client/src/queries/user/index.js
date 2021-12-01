import { useQuery } from 'react-query';
import { post } from '../../services/user/index';

export const useEfetuarLogin = (usuario) => {
  const { isLoading, data, isError } = useQuery("login", () =>
    post(usuario)
  );
  console.log('front service', data?.data);
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};