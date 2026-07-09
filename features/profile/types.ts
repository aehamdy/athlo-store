export type UpdateProfileRequest = {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export type UpdatePasswordRequest = {
  id: number;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
