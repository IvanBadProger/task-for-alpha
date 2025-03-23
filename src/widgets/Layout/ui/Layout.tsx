import { Logo } from "@/shared/"
import styles from "./Layout.module.css"
import { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
type navItem = {
  to: string
  content: React.ReactNode
}

export const Header = () => {
  const headerNavItems: navItem[] = [
    { to: "/create-product", content: "Создать продукт" },
    { to: "/", content: "Продукты" },
  ]

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          {headerNavItems.map(({ to, content }, index) => (
            <li key={index}>
              <NavLink to={to}>{content}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export const Footer = () => {
  return <footer className={styles.footer}>FOOTER</footer>
}
