import { type FC, type ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Button.module.scss"

interface Props {
	children: ReactNode | Array<ReactNode>
	className?: string
}

const Button: FC<Props> = ({ children, className }) => {
	return <button className={clsx(styles.button, className)}>{children}</button>
}

export default Button
