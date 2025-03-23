import products from "./productsSlice"
import categories from "./categoriesSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: { products, categories },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
