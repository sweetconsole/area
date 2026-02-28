import { type FC } from "react"
import styles from "./HowItWorks.module.scss"
import { Button, CardTitle, Label, Paragraph, SectionTitle } from "../../shared"
import { steps } from "./howItWorks.data.ts"

const HowItWorks: FC = () => {
	return (
		<section className={styles.section} id="how-to">
			<div className={styles.header}>
				<SectionTitle text="Map Your Success" />

				<Button>
					<Label text="Discover More" />
				</Button>
			</div>

			<ul className={styles.steps}>
				{steps.map((step, index) => (
					<li className={styles.step}>
						<h3 className={styles.step_count}>0{index + 1}</h3>
						<CardTitle className={styles.step_title} text={step.title} />
						<Paragraph className={styles.step_description}>
							{step.description}
						</Paragraph>
					</li>
				))}
			</ul>
		</section>
	)
}

export default HowItWorks
