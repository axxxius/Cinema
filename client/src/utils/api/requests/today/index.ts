import { api } from '@utils';

export const requestTodayPoster = async () => await api.get('/cinema/today');
