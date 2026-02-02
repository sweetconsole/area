import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./CardTitle.module.scss"

interface Props {
	text?: string
	style?: string
}

const CardTitle: FC<Props> = ({ text, style }) => {
	return <p className={clsx(styles.text, style)}>{text}</p>
}

export default CardTitle
