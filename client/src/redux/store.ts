
import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import { apiSlice } from "./features/api/apiSlice";


export const store = configureStore({
  reducer: { 
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authSlice,
  },
  devTools: false,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(apiSlice.middleware),
});

//call the refresh token function on every page load
const initializeApp = async () => {

  // await store.dispatch(
  //   apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  // );
//   await store.dispatch(
//     apiSlice.endpoints.fetchWebData.initiate({}, { forceRefetch: true })
//   )
};

initializeApp();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch