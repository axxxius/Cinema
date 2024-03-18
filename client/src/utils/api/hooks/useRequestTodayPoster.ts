import { useQuery } from '@tanstack/react-query';
import { requestTodayPoster } from '@utils';

export const useRequestTodayPosterQuery = () => {
  return useQuery({
    queryKey: ['today'],
    queryFn: () => requestTodayPoster()
  });
};
