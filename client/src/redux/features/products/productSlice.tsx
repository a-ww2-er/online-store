import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Search for product 
    searchProducts: builder.query({
      query: (q) => ({
        url: `products/search-products?query=${q}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useSearchProductsQuery } = productsApi;
