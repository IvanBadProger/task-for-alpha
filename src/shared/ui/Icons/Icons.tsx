import clsx from "clsx"
import styles from "./Icons.module.css"

export const Icons = {
  Like: ({ isLiked = false }: { isLiked?: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={clsx(styles.likePath, { fill: isLiked })}
        d="M12.12 20.3379L12 20.4687L11.868 20.3379C6.168 14.7008 2.4 10.9733 2.4 7.19346C2.4 4.57766 4.2 2.6158 6.6 2.6158C8.448 2.6158 10.248 3.92371 10.884 5.70245H13.116C13.752 3.92371 15.552 2.6158 17.4 2.6158C19.8 2.6158 21.6 4.57766 21.6 7.19346C21.6 10.9733 17.832 14.7008 12.12 20.3379ZM17.4 0C15.312 0 13.308 1.0594 12 2.72044C10.692 1.0594 8.688 0 6.6 0C2.904 0 0 3.15204 0 7.19346C0 12.1243 4.08 16.1657 10.26 22.2736L12 24L13.74 22.2736C19.92 16.1657 24 12.1243 24 7.19346C24 3.15204 21.096 0 17.4 0Z"
        fill="current-color"
      />
    </svg>
  ),
  Star: ({
    filled,
    className,
  }: {
    filled: boolean
    className?: string
  }) => {
    return (
      <svg
        className={clsx(styles.star, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5L14.09 8.26L19 9.27L15.5 13.14L16.18 18.02L12 15.77L7.82 18.02L8.5 13.14L5 9.27L9.91 8.26L12 3.5z"
        />
      </svg>
    )
  },
  Cross: () => {
    return (
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5M5 5L9 9M5 5L9 1M5 5L1 9"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  Back: () => {
    return (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 18.418C18.5533 15.4313 16.3807 13.7367 14.482 13.334C12.5833 12.9313 10.7757 12.8705 9.059 13.1515V18.5L1 9.7725L9.059 1.5V6.5835C12.2333 6.6085 14.932 7.74733 17.155 10C19.3777 12.2527 20.6593 15.0587 21 18.418Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
}
