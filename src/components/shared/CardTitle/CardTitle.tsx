import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./CardTitle.module.scss"

interface Props {
	text?: string
	className?: string
}

const CardTitle: FC<Props> = ({ text, className }) => {
	return <p className={clsx(styles.text, className)}>{text}</p>
}

export default CardTitle
