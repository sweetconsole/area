import { type FC, type ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Button.module.scss"

interface Props {
	children: ReactNode | Array<ReactNode>
	style?: string
}

const Button: FC<Props> = ({ style, children }) => {
	return <button className={clsx(styles.button, style)}>{children}</button>
}

export default Button
