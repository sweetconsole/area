import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./SectionTitle.module.scss"

interface Props {
	text: string
	className?: string
}

const SectionTitle: FC<Props> = ({ text, className }) => {
	return <h2 className={clsx(styles.title, className)}>{text}</h2>
}

export default SectionTitle
