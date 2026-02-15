import { type FC } from "react"
import { Link } from "react-scroll"
import { Button, Label } from "../../shared"
import styles from "./Header.module.scss"
import { menu } from "./header.data.ts"

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.logo} to="root" smooth>
				Area
			</Link>

			<nav className={styles.navigation}>
				{menu.map((link, index) => (
					<Link
						className={styles.link}
						to={link.path}
						key={index}
						smooth
						offset={-100}
					>
						<Label className={styles.link_text} text={link.title} />
					</Link>
				))}
			</nav>

			<Button className={styles.button}>
				<Label className={styles.label} text="Learn More" />
			</Button>
		</header>
	)
}

export default Header
