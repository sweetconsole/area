import { type ReactNode, type FC } from "react"
import { clsx } from "clsx"
import styles from "./Container.module.scss"

interface Props {
	children?: ReactNode | Array<ReactNode>
	style?: string
}

const Container: FC<Props> = ({ children, style }) => {
	return <div className={clsx(styles.container, style)}>{children}</div>
}

export default Container
