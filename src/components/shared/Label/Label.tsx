import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./Label.module.scss"

interface Props {
	text?: string
	style?: string
}

const Label: FC<Props> = ({ text, style }) => {
	return <p className={clsx(styles.text, style)}>{text}</p>
}

export default Label
