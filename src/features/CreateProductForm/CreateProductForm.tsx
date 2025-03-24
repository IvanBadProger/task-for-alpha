import {
  fetchCategories,
  selectCategories,
} from "@/app/store/categoriesSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { addProduct } from "@/app/store/productsSlice"
import { Product } from "@/shared"
import { Input } from "@/shared/ui/Input/Input"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./CreateProductForm.module.css"
import clsx from "clsx"

const SUPER_VALUES = {
  IMAGE:
    "https://images.unsplash.com/photo-1742567009397-c64925e0c3ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  TITLE: "Женщина - чай :)",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
  PRICE: 9999,
}

export type CreateProductFormInputs = {
  title: string
  description: string
  price: number
  image: string
  category: string
}

export const CreateProductForm = () => {
  const { register, handleSubmit, setValue, reset } =
    useForm<CreateProductFormInputs>()
  const { categories, status } = useAppSelector(selectCategories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories())
    }
  }, [])

  const onSubmit: SubmitHandler<CreateProductFormInputs> = (
    formData
  ) => {
    if (!formData.title || !formData.image || !formData.price) {
      return alert("Обязательные поля: название, изображение, цена")
    }

    dispatch(
      addProduct({
        ...formData,
        id: crypto.randomUUID(),
        rating: 0,
        isLiked: false,
      })
    )

    reset()
  }

  const insertDefaulValues = () => {
    setValue("title", SUPER_VALUES.TITLE)
    setValue("description", SUPER_VALUES.DESCRIPTION)
    setValue("price", SUPER_VALUES.PRICE)
    setValue("image", SUPER_VALUES.IMAGE)
    if (categories.length > 0) {
      setValue("category", categories[0].name)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("title")} label="Название товара" />

      <div className={styles.field}>
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          {...register("description")}
          placeholder="Описание"
        />
      </div>

      <Input {...register("price")} label="Цена" type="number" />
      <Input {...register("image")} label="Ссылка на изображение" />

      <div className={styles.field}>
        <label htmlFor="category">Категория</label>
        <select id="category" {...register("category")}>
          {categories.map(({ label, name, id }) => (
            <option key={id} value={name}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.buttons}>
        <button className={clsx("button")} type="submit">
          Добавить продукт
        </button>
        <button
          className={clsx("button")}
          type="button"
          onClick={insertDefaulValues}
        >
          Вставить значения супер чая
        </button>
        <button className={clsx("button")} type="reset">
          Очистить поля
        </button>
      </div>
    </form>
  )
}
