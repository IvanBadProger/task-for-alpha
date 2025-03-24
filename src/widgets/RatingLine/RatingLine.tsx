import { Icons } from "@/shared"
import styles from "./RatingLine.module.css"

type RatingLineProps = { rating: number }

export const RatingLine = ({ rating }: RatingLineProps) => {
  const maxStars = 5

  const renderStars = (rating: number) => {
    const stars = []

    for (let i = 0; i < maxStars; i++) {
      stars.push(<Icons.Star key={i} filled={i < rating} />)
    }
    return stars
  }

  return <div className={styles.rating}>{renderStars(rating)}</div>
}
