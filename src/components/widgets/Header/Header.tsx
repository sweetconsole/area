import { type FC, useState } from "react"
import { clsx } from "clsx"
import { Link } from "react-scroll"
import Arrow from "/images/arrow.svg"
import { useNavigation } from "../../../hooks/useNavigation.ts"
import { useScrollPosition } from "../../../hooks/useScrollPosition.ts"
import { Button, Container, Label, NavigationLink } from "../../shared"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const { headerLinks } = useNavigation()
	const scrollPosition = useScrollPosition()
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		document.body.style.overflow = isMenuOpen ? "visible" : "hidden"
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
		document.body.style.overflow = "visible"
	}

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
					<img className={styles.button_icon} src={Arrow} alt=">" />
				</Button>

				<div
					className={clsx(
						styles.navigation_mobile,
						isMenuOpen && styles.navigation_mobile_active
					)}
				>
					<nav className={styles.navigation}>
						{headerLinks.map((link, index) => (
							<NavigationLink key={index} onClick={closeMenu} {...link} />
						))}
					</nav>

					<Button className={styles.button}>
						<Label className={styles.label} text="Learn More" />
						<img className={styles.button_icon} src={Arrow} alt=">" />
					</Button>
				</div>

				<button
					className={clsx(
						styles.hamburger,
						isMenuOpen && styles.hamburger_active
					)}
					onClick={toggleMenu}
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
				>
					<div className={styles.bar}></div>
					<div className={styles.bar}></div>
					<div className={styles.bar}></div>
				</button>
			</Container>
		</header>
	)
}

export default Header
