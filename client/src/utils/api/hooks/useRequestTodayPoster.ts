import { useQuery } from '@tanstack/react-query';

import { requestTodayPoster } from '../requests';

export const useRequestTodayPosterQuery = (
  settings?: RequestQuerySettings<typeof requestTodayPoster>
) => {
  return useQuery({
    queryKey: ['today'],
    queryFn: () => requestTodayPoster({ config: settings?.config }),
    ...settings?.options
  });
};
