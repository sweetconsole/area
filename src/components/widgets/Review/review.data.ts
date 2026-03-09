import type { PictureAssets } from "../../../utils/assets.types.ts"

export const Photo: PictureAssets = {
	attributes: {
		src: "/images/review/photo_laptop.jpg"
	},
	sources: [
		{
			srcSet: "/images/review/photo_mobile.jpg",
			media: "(max-width: 800px)"
		},
		{
			srcSet: "/images/review/photo_tablet.jpg",
			media: "(max-width: 1280px)"
		}
	]
}
