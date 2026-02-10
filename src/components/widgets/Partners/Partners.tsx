import { type FC } from "react"
import { Picture, Paragraph } from "../../shared"
import { partners } from "./partners.data.ts"
import styles from "./Partners.module.scss"

const Partners: FC = () => {
	return (
		<section className={styles.block}>
			<Paragraph>Trusted by:</Paragraph>

			<ul className={styles.partners}>
				{partners.map((partner, index) => (
					<li className={styles.partner} key={index}>
						<Picture className={styles.logo} assets={partner.logo} />
					</li>
				))}
			</ul>

			<div className={styles.line}></div>
		</section>
	)
}

export default Partners
