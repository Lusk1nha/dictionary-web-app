import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/helpers/react-query-helper.ts";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./pages/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
