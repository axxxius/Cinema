import { api } from '@utils';

interface ScheduleByFilmId {
  success: boolean;
  schedules: api.Schedule[];
}

export const requestSchedule = async (id: string) => {
  const { data } = await api.get<ScheduleByFilmId>(`/cinema/film/${id}/schedule`);
  return data;
};
