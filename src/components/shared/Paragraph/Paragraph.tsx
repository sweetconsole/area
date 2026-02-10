import { type FC, type ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Paragraph.module.scss"

interface Props {
	text?: string
	children?: ReactNode | Array<ReactNode>
	className?: string
}

const Paragraph: FC<Props> = ({ text, children, className }) => {
	return (
		<p className={clsx(styles.text, className)}>{children ? children : text}</p>
	)
}

export default Paragraph
