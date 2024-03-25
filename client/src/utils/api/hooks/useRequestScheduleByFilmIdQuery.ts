import { useQuery } from '@tanstack/react-query';
import { requestSchedule } from '@utils';

interface UseRequestScheduleByFilmIdQueryParams {
  id: string | undefined;
}

export const useRequestScheduleByFilmIdQuery = (
  params: RequestParams<UseRequestScheduleByFilmIdQueryParams>,
  settings?: RequestQuerySettings<typeof requestSchedule>
) => {
  return useQuery({
    queryKey: ['schedule', params.id],
    queryFn: () => requestSchedule({ params, config: settings?.config }),
    ...settings?.options
  });
};
