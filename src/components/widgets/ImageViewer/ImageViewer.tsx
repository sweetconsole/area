import { Picture } from "../../shared"
import { type ImageNames, images } from "./imageViewer.ts"
import styles from "./ImageViewer.module.scss"

interface Props {
	name: ImageNames
}

const ImageViewer = ({ name }: Props) => {
	const image = images[name]

	if (!image) {
		console.error(`Image with id "${name}" not found`)
		return null
	}

	return <Picture className={styles.image} assets={image} />
}

export default ImageViewer
