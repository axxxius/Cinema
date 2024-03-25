import { api } from '@utils';

interface TodayPosterResponse {
  success: boolean;
  films: api.Film[];
}

export const requestTodayPoster = async ({ config }: AxiosRequestConfig) =>
  await api.get<TodayPosterResponse>('/cinema/today', config);
