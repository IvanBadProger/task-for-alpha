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
    return <span>Продукт не найден</span>
  }

  return (
    <div className={styles.productPage}>
      <ButtonBack />

      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
          <RatingLine rating={product.rating} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.category}>{product.category}</div>

          <Price price={product.price} />

          <p className={styles.description}>{product.description}</p>

          <div className={styles.actions}>
            <ButtonLike
              productId={product.id}
              isLiked={product.isLiked}
            />
            <ButtonDeleteProduct productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
