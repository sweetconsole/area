import { type CSSProperties, type FC } from "react"
import { clsx } from "clsx"
import styles from "./PageTitle.module.scss"

interface Props {
	text: string
	textAlign?: CSSProperties["textAlign"]
	style?: string
}

const PageTitle: FC<Props> = ({ text, textAlign = "center", style }) => {
	return (
		<h1 className={clsx(styles.title, style)} style={{ textAlign: textAlign }}>
			{text}
		</h1>
	)
}

export default PageTitle
