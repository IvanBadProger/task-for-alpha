import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"
import { ButtonLike } from "@/features/ButtonLike/ButtonLike"
import { ButtonDeleteProduct } from "@/features/ButtonDeleteProduct/ButtonDeleteProduct"
import { RatingLine } from "@/widgets/RatingLine/RatingLine"
import { Product } from "@/shared"
import { Price } from "@/widgets/Price/Price"
import clsx from "clsx"
import { CategoryTag } from "@/widgets/CategoryTag/CategoryTag"

type ProductCardProps = Product

export const ProductCard = (props: ProductCardProps) => {
  const {
    id,
    title,
    description,
    price,
    category,
    image,
    isLiked,
    rating,
  } = props

  return (
    <article className={styles.article}>
      <Link className={styles.link} to={`/product/${id}`}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
          <CategoryTag categoryName={category} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Price price={price} />
          <RatingLine rating={rating} />
        </div>
      </Link>
      <ButtonLike
        className={clsx(styles.action, styles.like)}
        isLiked={isLiked}
        productId={id}
      />
      <ButtonDeleteProduct
        className={clsx(styles.action, styles.delete)}
        productId={id}
      />
    </article>
  )
}
