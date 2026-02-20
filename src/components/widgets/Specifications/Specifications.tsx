import { type FC } from "react"
import {
	Button,
	Caption,
	Label,
	Paragraph,
	Picture,
	SectionTitle
} from "../../shared"
import styles from "./Specifications.module.scss"
import { plans } from "./specifications.data.ts"

const Specifications: FC = () => {
	return (
		<section className={styles.section} id="specifications">
			<div className={styles.header}>
				<Caption text="Specs" />
				<SectionTitle text="Why Choose Area?" />
				<Paragraph>
					You need a solution that keeps up. That’s why we developed Area. A
					developer-friendly approach to streamline your business.{" "}
				</Paragraph>
				<Button>
					<Label text="Discover More" />
				</Button>
			</div>

			<ul className={styles.plans}>
				{plans.map((plan, index) => (
					<li className={styles.plan} key={index}>
						<h3 className={styles.plan_title}>{plan.title}</h3>

						<ul className={styles.plan_features}>
							{plan.features.map((feature, key) => (
								<li className={styles.plan_feature} key={key}>
									<Picture className={styles.plan_icon} assets={feature.icon} />
									<Caption className={styles.plan_text} text={feature.text} />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Specifications
