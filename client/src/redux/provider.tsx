"use client"
import React from "react";
import { store } from "./store";
import  {Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Persistor } from "redux-persist/lib/types";
import {persistor} from "./store"
interface ReduxProviderProps {
  children: React.ReactNode;
  
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      {children}
    </Provider>
    </PersistGate>
  )
}
