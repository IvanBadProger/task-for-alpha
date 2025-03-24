import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import {
  selectProductById,
  fetchProductById,
} from "@/app/store/productsSlice"
import styles from "./AboutProductPage.module.css"
import { RatingLine } from "@/widgets/RatingLine/RatingLine"
import { ButtonLike } from "@/features/ButtonLike/ButtonLike"
import { ButtonDeleteProduct } from "@/features/ButtonDeleteProduct/ButtonDeleteProduct"
import { ButtonBack } from "@/features/ButtonBack/ButtonBack"
import { Price } from "@/widgets/Price/Price"
import { CategoryTag } from "@/widgets/CategoryTag/CategoryTag"

export const AboutProductPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const product = useAppSelector((state) =>
    selectProductById(state, id)
  )

  useEffect(() => {
    if (id && !product) {
      dispatch(fetchProductById(id))
    }
  }, [id])

  if (!product) {
    return (
      <>
        <ButtonBack />
        <span>Продукт не найден</span>
      </>
    )
  }

  const {
    image,
    title,
    category,
    description,
    isLiked,
    price,
    rating,
    id: productId,
  } = product

  return (
    <div className={styles.productPage}>
      <ButtonBack />

      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <RatingLine rating={rating} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>

          <CategoryTag categoryName={category} />

          <Price price={price} />

          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <ButtonLike productId={productId} isLiked={isLiked} />
            <ButtonDeleteProduct productId={productId} />
          </div>
        </div>
      </div>
    </div>
  )
}
