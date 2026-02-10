import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./Label.module.scss"

interface Props {
	text?: string
	className?: string
}

const Label: FC<Props> = ({ text, className }) => {
	return <p className={clsx(styles.text, className)}>{text}</p>
}

export default Label
