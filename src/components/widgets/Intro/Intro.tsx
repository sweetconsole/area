import { type FC } from "react"
import { Picture } from "../../shared"
import { IntroImage } from "./intro.data.ts"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<div className={styles.block}>
			<Picture className={styles.image} assets={IntroImage} />
			<div className={styles.background}></div>
		</div>
	)
}

export default Intro
