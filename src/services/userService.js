import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (_builder) => ({
    // User management endpoints will be added during implementation
  }),
  overrideExisting: false,
});

// Export hooks as they are created
// export const {} = userApi;
