import { create } from "zustand";
import { AuthState } from "@/features/auth/types/auth.types";

export const useAuthStore = create<AuthState>((set) => ({
  initialized: false,

  isAuthenticated: false,
  user: null,

  login: (user) =>
    set({
      initialized: true,
      user,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      initialized: true,
      user: null,
      isAuthenticated: false,
    }),

  setUser: (user) =>
    set({
      initialized: true,
      user,
      isAuthenticated: !!user,
    }),

  setAuthenticated: (authenticated) =>
    set({
      initialized: true,
      isAuthenticated: authenticated,
    }),

  setInitialized: (initialized) =>
    set({
      initialized,
    }),
}));
