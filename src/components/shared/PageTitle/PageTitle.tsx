import { type CSSProperties, type FC } from "react"
import { clsx } from "clsx"
import styles from "./PageTitle.module.scss"

interface Props {
	text: string
	textAlign?: CSSProperties["textAlign"]
	className?: string
}

const PageTitle: FC<Props> = ({ text, textAlign = "center", className }) => {
	return (
		<h1
			className={clsx(styles.title, className)}
			style={{ textAlign: textAlign }}
		>
			{text}
		</h1>
	)
}

export default PageTitle
