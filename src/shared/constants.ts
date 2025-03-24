// export const BASE_URL = "http://localhost:3000"
export const BASE_URL = "/api"

export const API_ENDPOINTS = {
  PRODUCTS: {
    GET_ALL: `${BASE_URL}/products`,
    GET_BY_ID: (id: number | string) => `${BASE_URL}/products/${id}`,
    CREATE: `${BASE_URL}/products`,
    UPDATE: (id: number | string) => `${BASE_URL}/products/${id}`,
    DELETE: (id: number | string) => `${BASE_URL}/products/${id}`,
  },
  CATEGORIES: {
    GET_ALL: `${BASE_URL}/categories`,
    GET_BY_ID: (id: number | string) =>
      `${BASE_URL}/categories/${id}`,
  },
} as const
