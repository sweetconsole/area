import { type FC } from "react"
import { clsx } from "clsx"
import { Link } from "react-scroll"
import { useNavigation } from "../../../hooks/useNavigation.ts"
import { useScrollPosition } from "../../../hooks/useScrollPosition.ts"
import { Button, Container, Label, NavigationLink } from "../../shared"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const { headerLinks } = useNavigation()
	const scrollPosition = useScrollPosition()

	return (
		<header
			className={clsx(
				scrollPosition > 0 && styles.header_scrolled,
				styles.header
			)}
		>
			<Container className={styles.container}>
				<Link className={styles.logo} to="root" smooth>
					Area
				</Link>

				<nav className={styles.navigation}>
					{headerLinks.map((link, index) => (
						<NavigationLink key={index} {...link} />
					))}
				</nav>

				<Button className={styles.button}>
					<Label className={styles.label} text="Learn More" />
				</Button>
			</Container>
		</header>
	)
}

export default Header
