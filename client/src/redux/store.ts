import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { 
    persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true,
    },
  }).concat(apiSlice.middleware),
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

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch