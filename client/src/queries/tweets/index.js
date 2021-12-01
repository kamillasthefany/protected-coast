import { useQuery } from 'react-query';
import { listarTweets } from '../../services/tweets/index';

export const useListarTweets = () => {
  const { isLoading, data, isError } = useQuery("tweets", () =>
    listarTweets()
  );
  console.log('front service', data?.data);
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};