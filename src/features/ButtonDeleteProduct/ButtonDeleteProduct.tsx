import { useAppDispatch } from "@/app/store/hooks"
import { deleteProduct } from "@/app/store/productsSlice"
import clsx from "clsx"
import styles from "./ButtonDeleteProduct.module.css"
import { Icons } from "@/shared"

type ButtonDeleteProductProps = {
  productId: string
  className?: string
}

export const ButtonDeleteProduct = ({
  productId,
  className,
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
      className={clsx(styles.delete, className)}
      type="button"
      title="Удалить"
      onClick={onDelete}
    >
      <Icons.Cross />
    </button>
  )
}
