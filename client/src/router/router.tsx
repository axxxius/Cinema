import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components';
import { CurrentFilm, Poster } from '@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ROUTES } from '@utils';

const client = new QueryClient();

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={client}>
        <Layout />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    ),
    children: [
      {
        path: ROUTES.MAIN,
        element: <Poster />
      },
      {
        path: ROUTES.FILM_ID,
        element: <CurrentFilm />
      }
    ]
  }
]);
