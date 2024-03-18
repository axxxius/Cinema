import { api } from '@utils';

interface ResponseTodayPoster {
  success: boolean;
  films: api.Film[];
}

export const requestTodayPoster = async () => {
  const { data } = await api.get<ResponseTodayPoster>('/cinema/today');
  return data.films;
};
