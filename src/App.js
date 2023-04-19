import React from "react";
import { Poke } from "./Poke";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app d-flex flex-column justify-content-center w-full align-items-center h-full">
        <Poke />

      </div>
    </QueryClientProvider>
  );
};
