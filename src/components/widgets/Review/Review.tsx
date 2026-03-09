import { type FC } from "react"
import { Caption, Paragraph, Picture } from "../../shared"
import { Photo } from "./review.data.ts"
import styles from "./Review.module.scss"

const Review: FC = () => {
	return (
		<section className={styles.section}>
			<Picture className={styles.photo} assets={Photo} />
			<div className={styles.info}>
				<p className={styles.review}>
					“I was skeptical, but Area has completely transformed the way I manage
					my business. The data visualizations are so clear and intuitive, and
					the platform is so easy to use. I can't imagine running my company
					without it.”
				</p>

				<div className={styles.author}>
					<Paragraph className={styles.author_name}>John Smith</Paragraph>
					<Caption className={styles.profession} text="Head of Data" />
				</div>
			</div>
		</section>
	)
}

export default Review
