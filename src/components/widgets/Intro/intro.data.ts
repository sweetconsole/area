import type { PictureAssets } from "../../../utils/assets.types.ts"

export const IntroImage: PictureAssets = {
	attributes: {
		src: "/images/intro_laptop.png"
	},
	sources: [
		{
			srcSet: "/images/intro_mobile.png",
			media: "(max-width: 800px)"
		},
		{
			srcSet: "/images/intro_tablet.png",
			media: "(max-width: 1200px)"
		}
	]
}
