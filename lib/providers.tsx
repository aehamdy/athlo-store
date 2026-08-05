"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { queryClient } from "./query-client";
import { setupInterceptors } from "./interceptors";
import { useAuthStore } from "./stores/auth.store";
import { useEffect } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  initialIsAuthenticated: boolean;
};

export default function Providers({
  children,
  initialIsAuthenticated,
}: ProvidersProps) {
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  useEffect(() => {
    setupInterceptors();
  }, []);

  useEffect(() => {
    setAuthenticated(initialIsAuthenticated);
  }, [initialIsAuthenticated, setAuthenticated]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
