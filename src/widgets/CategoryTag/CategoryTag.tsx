import styles from "./CategoryTag.module.css"

type CategoryTagProps = { categoryName: string }

export const CategoryTag = ({ categoryName }: CategoryTagProps) => {
  return <span className={styles.category}>{categoryName}</span>
}
