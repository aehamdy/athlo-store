"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { useEffect } from "react";
import { setupInterceptors } from "./interceptors";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupInterceptors();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
