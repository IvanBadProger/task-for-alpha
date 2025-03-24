import { useEffect, useState, useMemo } from "react"
import {
  fetchProducts,
  selectProducts,
} from "@/app/store/productsSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { ErrorMessage, Loading } from "@/shared"
import { ProductFilter } from "@/features/ProductFilter/ProductFilter"
import {
  fetchCategories,
  selectCategories,
} from "@/app/store/categoriesSlice"
import { ProductsList } from "@/widgets/ProductsList"

export const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const {
    products,
    error,
    status: productsStatus,
  } = useAppSelector(selectProducts)
  const { categories, status: categoriesStatus } =
    useAppSelector(selectCategories)
  const [filters, setFilters] = useState({
    category: "all",
    rating: 0,
    onlyFavorites: false,
  })

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts())
    }
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories())
    }
  }, [productsStatus, categoriesStatus])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        filters.category === "all" ||
        product.category === filters.category
      const ratingMatch = product.rating >= filters.rating
      const favoritesMatch = !filters.onlyFavorites || product.isLiked

      return categoryMatch && ratingMatch && favoritesMatch
    })
  }, [products, filters])

  return (
    <>
      <h1>Products</h1>
      {productsStatus === "loading" && <Loading />}
      {productsStatus === "fail" && <ErrorMessage message={error} />}
      <ProductFilter
        onFilterChange={setFilters}
        categories={categories}
      />
      <ProductsList products={filteredProducts} />
    </>
  )
}
