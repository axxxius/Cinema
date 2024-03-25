import { api } from '@utils';

interface RequestScheduleParams {
  id: string | undefined;
}

type ScheduleConfig = AxiosRequestConfig<RequestScheduleParams>;

interface ScheduleByFilmIdResponse {
  success: boolean;
  schedules: api.Schedule[];
}

export const requestSchedule = async ({ params, config }: ScheduleConfig) =>
  await api.get<ScheduleByFilmIdResponse>(`/cinema/film/${params.id}/schedule`, config);
