import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  // endpoints: (_builder) => ({
  endpoints: () => ({
    // Auth endpoints will be added during implementation
  }),
  overrideExisting: false,
});

// Export hooks as they are created
// export const {} = authApi;
