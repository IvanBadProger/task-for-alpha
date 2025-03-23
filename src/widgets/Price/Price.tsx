import styles from "./Price.module.css"

type PriceProps = {
  price: number
}

export const Price = ({ price }: PriceProps) => {
  return (
    <span className={styles.price}>
      {new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(price)}
    </span>
  )
}
