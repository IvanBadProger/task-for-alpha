import { CreateProductForm } from "../../../features/CreateProductForm/CreateProductForm"
import styles from "./CreateProductPage.module.css"

export const CreateProductPage = () => {
  return (
    <section className={styles.page}>
      <h1>Create Product</h1>
      <CreateProductForm />
    </section>
  )
}
