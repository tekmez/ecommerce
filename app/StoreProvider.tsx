"use client";
import { createContext, ReactNode, useContext } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store"; // store dosyanızın yolu

const StoreContext = createContext<AppStore | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const store = makeStore();

  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>{children}</Provider>
    </StoreContext.Provider>
  );
}

export function useAppStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useAppStore must be used within a StoreProvider");
  }
  return store;
}
