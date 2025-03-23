import { Icons } from "@/shared"
import styles from "./RatingLine.module.css"

type RatingLineProps = { rating: number }

export const RatingLine = ({ rating }: RatingLineProps) => {
  const renderStars = (rating: number) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icons.Star
          key={i}
          filled={i < rating}
          className={styles.star}
        />
      )
    }
    return stars
  }

  return <div className={styles.rating}>{renderStars(rating)}</div>
}
