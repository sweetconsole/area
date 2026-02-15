import { type FC } from "react"

import {
	Caption,
	CardTitle,
	Paragraph,
	Picture,
	SectionTitle
} from "../../shared"
import styles from "./Benefits.module.scss"
import { benefits } from "./benefits.ts"

const Benefits: FC = () => {
	return (
		<section className={styles.section} id="benefits">
			<Caption className={styles.caption} text="Benefits" />
			<SectionTitle className={styles.title} text="We’ve cracked the code." />
			<Paragraph className={styles.paragraph}>
				Area provides real insights, without the data overload.
			</Paragraph>

			<ul className={styles.benefits}>
				{benefits.map((benefit, index) => (
					<li className={styles.benefit} key={index}>
						<Picture className={styles.benefit_icon} assets={benefit.icon} />
						<CardTitle className={styles.benefit_title} text={benefit.title} />
						<Paragraph className={styles.benefit_description}>
							{benefit.description}
						</Paragraph>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Benefits
