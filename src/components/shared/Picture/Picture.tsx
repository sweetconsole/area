import { type FC } from "react"
import type { PictureAssets } from "../../../utils/assets.types.ts"

type PictureProps = {
	assets: PictureAssets
	className?: string
}

const Picture: FC<PictureProps> = ({ assets, className }) => {
	return (
		<picture>
			{assets.sources.map((source, index) => (
				<source {...source} key={index} />
			))}

			<img
				className={className}
				{...assets.attributes}
				alt={assets.attributes.alt ? assets.attributes.alt : "Error loading"}
			/>
		</picture>
	)
}

export default Picture
