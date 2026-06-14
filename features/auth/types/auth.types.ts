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
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;

  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}
