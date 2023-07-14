import React from "react";
import Router from "./shared/Router";
import ResetCss from "./style/GolbalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/neodgm/neodgm-webfont@1.530/neodgm/style.css"
        />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/neodgm/neodgm-webfont@1.530/neodgm_code/style.css"
        />
      </Helmet>
      <ResetCss />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
