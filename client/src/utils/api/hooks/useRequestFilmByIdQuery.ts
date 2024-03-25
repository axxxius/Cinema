import { useQuery } from '@tanstack/react-query';
import { fetchFilm } from '@utils';

interface UseRequestFilmByIdQuery {
  id: string | undefined;
}

export const useRequestFilmByIdQuery = (
  params: RequestParams<UseRequestFilmByIdQuery>,
  settings?: RequestQuerySettings<typeof fetchFilm>
) => {
  return useQuery({
    queryKey: ['film', params.id],
    queryFn: () => fetchFilm({ params, config: settings?.config }),
    ...settings?.options
  });
};
