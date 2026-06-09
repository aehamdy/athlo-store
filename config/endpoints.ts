const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION_PATH = `${BASE_URL}/Api/V1`;

const CONTROLLER_PATH = {
  authentication: `${API_VERSION_PATH}/Authentication`,
  user: `${API_VERSION_PATH}/User`,
  product: `${API_VERSION_PATH}/Product`,
  category: `${API_VERSION_PATH}/Category`,
};

export const ENDPOINTS = {
  auth: {
    login: `${CONTROLLER_PATH.authentication}/SignIn`,
  },
  user: {
    register: `${CONTROLLER_PATH.user}/Create`,
  },
};
