import { type FC } from "react"
import Arrow from "/images/arrow.svg"
import styles from "./ContactUs.module.scss"
import { Button, Paragraph, SectionTitle, Label } from "../../shared"

const ContactUs: FC = () => {
	return (
		<section className={styles.section} id="contact-us">
			<SectionTitle text="Connect with us" />
			<Paragraph>
				Schedule a quick call to learn how Area can turn your regional data into
				a powerful advantage.
			</Paragraph>
			<Button className={styles.button}>
				<Label text="Learn More" />
				<img className={styles.button_icon} src={Arrow} alt=">" />
			</Button>
		</section>
	)
}

export default ContactUs
