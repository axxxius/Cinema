type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };

type RequestParams<Params> = Params;

interface RequestQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/react-query').UseQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any
  >;
}
