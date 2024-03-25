import { api } from '@utils';

interface FetchFilmParams {
  id: string | undefined;
}

type FilmConfig = AxiosRequestConfig<FetchFilmParams>;

interface FilmByIdResponse {
  success: boolean;
  film: api.Film;
}

export const fetchFilm = async ({ params, config }: FilmConfig) =>
  await api.get<FilmByIdResponse>(`/cinema/film/${params.id}`, config);
