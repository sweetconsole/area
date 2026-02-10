import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./Caption.module.scss"

interface Props {
	text: string
	className?: string
}

const Caption: FC<Props> = ({ text, className }) => {
	return <p className={clsx(styles.text, className)}>{text}</p>
}

export default Caption
