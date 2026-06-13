import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const InstituteApi = createApi({
    reducerPath: 'InstituteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),

    endpoints: (builder) => ({
    // GET all institutes
    getInstitute: builder.query({
      query: () => "/getallinstitute",
    }),

    // GET institute by ID
    getInstituteById: builder.query({
      query: (id) => `/institute/${id}`,
    }),

    // INSERT
    addInstitute: builder.mutation({
      query: (formData) => ({
        url: "/addinstitute",
        method: "POST",
        body: formData,
      }),
    }),

    // UPDATE
    updateInstitute: builder.mutation({
      query: ({ id, ...updatedInstitute }) => ({
        url: `/updateinstitute/${id}`,
        method: "PUT",
        body: updatedInstitute,
      }),
    }),

    // DELETE
    deleteInstitute: builder.mutation({
      query: (id) => ({
        url: `/deleteinstitute/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetInstituteQuery,
  useGetInstituteByIdQuery,
  useAddInstituteMutation,
  useUpdateInstituteMutation,
  useDeleteInstituteMutation,
} = InstituteApi;