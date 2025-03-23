import { useNavigate } from "react-router-dom"
import styles from "./ButtonBack.module.css"

type ButtonBackProps = {}

export const ButtonBack = ({}: ButtonBackProps) => {
  const navigate = useNavigate()

  return (
    <button
      className={styles.backButton}
      onClick={() => navigate(-1)}
    >
      Назад
    </button>
  )
}
