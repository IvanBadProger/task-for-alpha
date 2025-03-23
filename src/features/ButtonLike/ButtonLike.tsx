import { useAppDispatch } from "@/app/store/hooks"
import { updateLikeProduct } from "@/app/store/productsSlice"
import clsx from "clsx"
import styles from "./ButtonLike.module.css"
import { Icons } from "@/shared"

type ButtonLikeProps = { isLiked: boolean; productId: string }

export const ButtonLike = ({
  isLiked,
  productId,
}: ButtonLikeProps) => {
  const dispatch = useAppDispatch()

  const onLike = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(
      updateLikeProduct({ productId: productId, isLiked: !isLiked })
    )
    event.stopPropagation()
  }

  const labelButtonLike = isLiked
    ? "Удалить из избранного"
    : "Добавить в избранное"

  return (
    <button
      className={clsx(styles.like)}
      type="button"
      title={labelButtonLike}
      aria-label={labelButtonLike}
      aria-pressed={isLiked}
      onClick={onLike}
    >
      <Icons.Like isLiked={isLiked} />
    </button>
  )
}
