import { baseApi } from './baseApi';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (_builder) => ({
    // Dashboard endpoints will be added during implementation
  }),
  overrideExisting: false,
});

// Export hooks as they are created
// export const {} = dashboardApi;
