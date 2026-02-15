import { type FC } from "react"
import { Paragraph, Picture, SectionTitle, Button, Label } from "../../shared"
import { features, Image } from "./bigPicture.data.ts"
import styles from "./BigPicture.module.scss"

const BigPicture: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<SectionTitle text="See the Big Picture" />
				<Paragraph>
					Area turns your data into clear, vibrant visuals that show you exactly
					what's happening in each region.
				</Paragraph>

				<ul className={styles.features}>
					{features.map((feature, index) => (
						<li className={styles.feature}>
							<Paragraph className={styles.feature_number}>
								0{index + 1}
							</Paragraph>
							<Paragraph className={styles.feature_text}>{feature}</Paragraph>
						</li>
					))}
				</ul>

				<Button>
					<Label text="Discover More" />
				</Button>
			</div>

			<Picture className={styles.image} assets={Image} />
		</section>
	)
}

export default BigPicture
