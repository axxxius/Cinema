import { useQuery } from '@tanstack/react-query';
import { fetchFilm } from '@utils';

export const useRequestFilmByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['film', id],
    queryFn: () => fetchFilm(id)
  });
};
