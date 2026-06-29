import { create } from "zustand";
import { AuthState } from "@/features/auth/types/auth.types";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setAuthenticated: (authenticated) =>
    set({
      isAuthenticated: authenticated,
    }),
}));
