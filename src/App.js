import React from "react";
import Router from "./shared/Router";
import ResetCss from "./style/GolbalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResetCss />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
