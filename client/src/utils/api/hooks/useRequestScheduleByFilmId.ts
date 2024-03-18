import { useQuery } from '@tanstack/react-query';
import { requestSchedule } from '@utils';

export const useRequestScheduleByFilmId = (id: string) => {
  return useQuery({
    queryKey: ['schedule', id],
    queryFn: () => requestSchedule(id)
  });
};
