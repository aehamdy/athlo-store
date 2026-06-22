export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_VERSION_PATH = `${API_BASE_URL}/Api/V1`;

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
};
