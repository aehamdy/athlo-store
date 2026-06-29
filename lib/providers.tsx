"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { useEffect } from "react";
import { setupInterceptors } from "./interceptors";
import { useAuthStore } from "./stores/auth.store";

type ProvidersProps = {
  children: React.ReactNode;
  initialIsAuthenticated: boolean;
};

export default function Providers({
  children,
  initialIsAuthenticated,
}: ProvidersProps) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  // Initialize Zustand once
  useAuthStore.setState({
    isAuthenticated: initialIsAuthenticated,
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
