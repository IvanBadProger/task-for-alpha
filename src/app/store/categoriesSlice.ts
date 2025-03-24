import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store/store"
import { Category } from "@/shared/types"
import { API_ENDPOINTS } from "@/shared/constants"
import { StateStatus } from "./types"

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async () => {
    const res = await fetch(API_ENDPOINTS.CATEGORIES.GET_ALL)
    const categories = await res.json()

    return categories
  }
)

type CategoriesState = {
  categories: Category[]
  status: StateStatus
}

const initialState: CategoriesState = {
  categories: [],
  status: "idle",
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.status = "success"
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "fail"
      })
  },
})

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
