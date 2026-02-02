import { type FC } from "react"
import { clsx } from "clsx"
import styles from "./SectionTitle.module.scss"

interface Props {
	text: string
	style?: string
}

const SectionTitle: FC<Props> = ({ text, style }) => {
	return <h2 className={clsx(styles.title, style)}>{text}</h2>
}

export default SectionTitle
