import { useNavigate } from "react-router-dom"
import styles from "./ButtonBack.module.css"
import clsx from "clsx"
import { Icons } from "@/shared"

type ButtonBackProps = {}

export const ButtonBack = ({}: ButtonBackProps) => {
  const navigate = useNavigate()

  return (
    <button
      className={clsx("button", styles.backButton)}
      onClick={() => navigate("/")}
      title="Вернуться на главную"
    >
      <Icons.Back />
    </button>
  )
}
