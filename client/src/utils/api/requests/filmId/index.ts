import { api } from '@utils';

interface FilmById {
  success: boolean;
  film: api.Film;
}

export const fetchFilm = async (id: string) => {
  const { data } = await api.get<FilmById>(`/cinema/film/${id}`);
  return data.film;
};
