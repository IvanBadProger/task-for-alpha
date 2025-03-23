import clsx from "clsx"
import styles from "./Input.module.css"

type InputProps = {
  label: string
  isLabelHidden?: false
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  const {
    label,
    type = "text",
    name,
    isLabelHidden = false,
    ...rest
  } = props

  return (
    <div>
      <label
        className={clsx(
          { "visually-hidden": isLabelHidden },
          styles.label
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
    </div>
  )
}
