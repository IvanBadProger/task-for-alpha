import { useState } from "react"
import styles from "./ProductFilter.module.css"
import { Category } from "@/shared"

type FilterState = {
  category: string
  rating: number
  onlyFavorites: boolean
}

type ProductFilterProps = {
  onFilterChange: (filters: FilterState) => void
  categories: Category[]
}

export const ProductFilter = ({
  onFilterChange,
  categories,
}: ProductFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    rating: 0,
    onlyFavorites: false,
  })

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number | boolean
  ) => {
    const newFilters = {
      ...filters,
      [key]: value,
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterItem}>
        <select
          value={filters.category}
          onChange={(e) =>
            handleFilterChange("category", e.target.value)
          }
        >
          <option value="all">Все категории</option>
          {categories.map(({ id, name, label }) => (
            <option key={id} value={name}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterItem}>
        <select
          value={filters.rating}
          onChange={(e) =>
            handleFilterChange("rating", Number(e.target.value))
          }
        >
          <option value={0}>Любой рейтинг</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {`${rating} и выше`}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterItem}>
        <label>
          <input
            type="checkbox"
            checked={filters.onlyFavorites}
            onChange={(e) =>
              handleFilterChange("onlyFavorites", e.target.checked)
            }
          />
          Только избранное
        </label>
      </div>
    </div>
  )
}
