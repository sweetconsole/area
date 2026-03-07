import { type FC } from "react"
import { Link } from "react-scroll"
import { clsx } from "clsx"
import { Label } from "../../shared"
import styles from "./NavigationLink.module.scss"

interface Props {
	path: string
	label: string
	className?: string
}

const NavigationLink: FC<Props> = ({ path, label, className }) => {
	return (
		<Link
			className={clsx(styles.link, className)}
			to={path}
			smooth
			offset={-100}
		>
			<Label className={styles.link_text} text={label} />
		</Link>
	)
}

export default NavigationLink
