export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_VERSION_PATH = `${API_BASE_URL}/Api/V1`;

const CONTROLLER_PATH = {
  authentication: `${API_VERSION_PATH}/Authentication`,
  user: `${API_VERSION_PATH}/User`,
  product: `${API_VERSION_PATH}/Product`,
  review: `${API_VERSION_PATH}/Review`,
  cart: `${API_VERSION_PATH}/CartItem`,
  category: `${API_VERSION_PATH}/Category`,
};

export const ENDPOINTS = {
  auth: {
    login: `${CONTROLLER_PATH.authentication}/SignIn`,
  },
  user: {
    register: `${CONTROLLER_PATH.user}/Create`,
    profile: (id: string) => `${CONTROLLER_PATH.user}/${id}`,
    update: `${CONTROLLER_PATH.user}/Edit`,
    delete: (id: string) => `${CONTROLLER_PATH.user}/${id}`,
    changePassword: `${CONTROLLER_PATH.user}/change-password`,
  },
  product: {
    paginated: ({
      pageNumber,
      pageSize,
      search,
      ordering,
    }: {
      pageNumber?: number;
      pageSize?: number;
      search?: string;
      ordering?: number;
    }) => {
      const params = new URLSearchParams();

      if (pageNumber !== undefined)
        params.set("PageNumber", pageNumber.toString());

      if (pageSize !== undefined) params.set("PageSize", pageSize.toString());

      if (search) params.set("Search", search);

      if (ordering !== undefined) params.set("Ordering", ordering.toString());

      return `${CONTROLLER_PATH.product}/Paginated?${params.toString()}`;
    },
    productDetails: (id: string) =>
      `${CONTROLLER_PATH.product}/${id}/With-Variants`,
  },
  review: {
    list: (id: string) => `${CONTROLLER_PATH.review}/product/${id}`,
    create: `${CONTROLLER_PATH.review}/Create`,
    edit: `${CONTROLLER_PATH.review}/Edit`,
    delete: (id: string) => `${CONTROLLER_PATH.review}/${id}`,
  },
  cart: {
    list: `${CONTROLLER_PATH.cart}/List`,
    add: `${CONTROLLER_PATH.cart}/Create`,
    summary: `${CONTROLLER_PATH.cart}/GetCartSummary`,
    delete: (id: number) => `${CONTROLLER_PATH.cart}/${id}`,
    updateQuantity: `${CONTROLLER_PATH.cart}/Edit`,
  },
};
