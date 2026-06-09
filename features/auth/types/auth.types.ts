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
