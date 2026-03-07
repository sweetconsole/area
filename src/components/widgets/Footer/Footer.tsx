import { type FC } from "react"
import Logo from "/images/logo_people.svg"
import { useNavigation } from "../../../hooks/useNavigation.ts"
import { Caption, NavigationLink } from "../../shared"
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	const { footerLinks } = useNavigation()

	return (
		<footer className={styles.footer}>
			<nav className={styles.navigation}>
				{footerLinks.map((link, index) => (
					<NavigationLink key={index} {...link} />
				))}
			</nav>

			<div className={styles.info}>
				<div className={styles.brand}>
					<img className={styles.logo} src={Logo} alt="" />
					<Caption className={styles.company} text="© Area." />
					<Caption className={styles.years} text="2025" />
				</div>

				<Caption className={styles.copyright} text="All Rights Reserved" />
			</div>
		</footer>
	)
}

export default Footer
