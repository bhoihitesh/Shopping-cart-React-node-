import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = import.meta.env.VITE_API;
export const apiSlice = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foodhunt-z2x3.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetFoodItemsQuery } = apiSlice;
