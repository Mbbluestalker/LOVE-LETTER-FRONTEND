import { baseApi } from './baseApi';

export const accountApi = baseApi.injectEndpoints({
  endpoints: (_builder) => ({
    // Account management endpoints will be added during implementation
  }),
  overrideExisting: false,
});

// Export hooks as they are created
// export const {} = accountApi;
