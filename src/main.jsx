import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/Router.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="max-w-[1500px] mx-auto">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
