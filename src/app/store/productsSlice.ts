import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store/store"
import { Product } from "@/shared/types"
import { API_ENDPOINTS } from "@/shared/constants"
import { StateStatus } from "./types"

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    console.log(API_ENDPOINTS.PRODUCTS.GET_ALL)
    const res = await fetch(API_ENDPOINTS.PRODUCTS.GET_ALL)
    const products = await res.json()

    return products
  }
)

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId: string) => {
    const res = await fetch(
      API_ENDPOINTS.PRODUCTS.GET_BY_ID(productId)
    )
    const product = await res.json()

    return product
  }
)

export const deleteProduct = createAsyncThunk(
  "products/deleteByID",
  async (productId: string | number) => {
    await fetch(API_ENDPOINTS.PRODUCTS.DELETE(productId), {
      method: "DELETE",
    })

    return productId
  }
)

export const updateLikeProduct = createAsyncThunk(
  "products/updateLikeProduct",
  async ({
    productId,
    isLiked,
  }: {
    productId: string | number
    isLiked: boolean
  }) => {
    await fetch(API_ENDPOINTS.PRODUCTS.GET_BY_ID(productId), {
      method: "PATCH",
      body: JSON.stringify({ isLiked }),
    })

    return { productId, isLiked }
  }
)

export const addProduct = createAsyncThunk(
  "products/add",
  async (data: Product) => {
    await fetch(API_ENDPOINTS.PRODUCTS.CREATE, {
      method: "POST",
      body: JSON.stringify(data),
    })

    return data
  }
)

type ProductsState = {
  products: Product[]
  status: StateStatus
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success"
        state.products = action.payload
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "fail"
        state.error =
          action.error.message ||
          "Произошла ошибка во время получения продуктов"
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "success"
        state.error = null
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        )
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "fail"
        state.error =
          action.error.message ||
          "Произошла ошибка во время удаления продукта"
      })
      .addCase(updateLikeProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, isLiked: action.payload.isLiked }
            : product
        )
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "success"
        state.products[action.payload.id] = action.payload
      })
  },
})

export const selectProducts = (state: RootState) => state.products
export const selectProductById = (
  state: RootState,
  productId?: string
) => {
  const id = productId ? productId : null

  return state.products.products.find((product) => product.id === id)
}

export default productsSlice.reducer
