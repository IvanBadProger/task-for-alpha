import styles from "./ErrorMessage.module.css"

type ErrorMessageProps = {
  message: string | null
}

export const ErrorMessage = ({
  message = "Произошла ошибка",
}: ErrorMessageProps) => {
  return <span className={styles.error}>{message}</span>
}
