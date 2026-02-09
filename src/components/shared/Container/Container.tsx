import { type ReactNode, type FC } from "react"
import { clsx } from "clsx"
import styles from "./Container.module.scss"

interface Props {
	children?: ReactNode | Array<ReactNode>
	className?: string
}

const Container: FC<Props> = ({ children, className }) => {
	return <div className={clsx(styles.container, className)}>{children}</div>
}

export default Container
