import { type FC, type ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Paragraph.module.scss"

interface Props {
	text?: string
	children?: ReactNode | Array<ReactNode>
	style?: string
}

const Paragraph: FC<Props> = ({ text, children, style }) => {
	return (
		<p className={clsx(styles.text, style)}>{children ? children : text}</p>
	)
}

export default Paragraph
