import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./Caption.module.scss"

interface Props {
	text: string
	style?: string
}

const Caption: FC<Props> = ({ text, style }) => {
	return <p className={clsx(styles.text, style)}>{text}</p>
}

export default Caption
