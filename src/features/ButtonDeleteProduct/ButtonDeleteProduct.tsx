import { useAppDispatch } from "@/app/store/hooks"
import { deleteProduct } from "@/app/store/productsSlice"
import clsx from "clsx"
import styles from "./ButtonDeleteProduct.module.css"

type ButtonDeleteProductProps = { productId: string }

export const ButtonDeleteProduct = ({
  productId,
}: ButtonDeleteProductProps) => {
  const dispatch = useAppDispatch()

  const onDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(deleteProduct(productId))
    event.stopPropagation()
  }

  return (
    <button
      className={clsx(styles.delete)}
      type="button"
      title="Удалить"
      onClick={onDelete}
    >
      X
    </button>
  )
}
