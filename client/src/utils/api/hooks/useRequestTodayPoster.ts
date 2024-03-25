import { requestTodayPoster } from '../requests';
import { useQuery } from '@tanstack/react-query';

export const useRequestTodayPosterQuery = (
  settings?: RequestQuerySettings<typeof requestTodayPoster>
) => {
  return useQuery({
    queryKey: ['today'],
    queryFn: () => requestTodayPoster({ config: settings?.config }),
    ...settings?.options
  });
};
