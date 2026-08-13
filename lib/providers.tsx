"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { queryClient } from "./query-client";
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
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  useEffect(() => {
    setupInterceptors();
  }, []);

  useEffect(() => {
    setAuthenticated(initialIsAuthenticated);
  }, [initialIsAuthenticated, setAuthenticated]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
