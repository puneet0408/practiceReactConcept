import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const AdminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      providesTags:['account']
    }),
    addAccounts: builder.mutation({
      query: (amount, id) => ({
        url: "account",
        method: "POST",
        body: { amount: amount, id: id },
      }),
      invalidatesTags:['account']
    }),
    deleteAccounts: builder.mutation({
      query: ( id) => ({
        url: `account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['account']
    }),
    updateAccounts: builder.mutation({
      query: ({id , amount}) => ({
        url: `account/${id}`,
        method: "PATCH",
        body:{amount}
      }),
      invalidatesTags:['account']
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery,useUpdateAccountsMutation ,useAddAccountsMutation , useDeleteAccountsMutation} = AdminApi;
