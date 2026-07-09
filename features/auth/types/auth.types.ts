export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: {
    userName: string;
    tokenString: string;
    expireAt: string;
  };
};

export interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export type AuthState = {
  initialized: boolean;
  isAuthenticated: boolean;
  user: User | null;

  login: (user: User) => void;
  logout: () => void;

  setUser: (user: User | null) => void;
  setAuthenticated: (authenticated: boolean) => void;
  setInitialized: (initialized: boolean) => void;
};

export type RegisterRequest = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};
