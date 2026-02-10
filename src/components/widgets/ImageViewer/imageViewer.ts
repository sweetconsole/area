import type { PictureAssets } from "../../../utils/assets.types.ts"

export const images: Record<string, PictureAssets> = {
	Mountains: {
		attributes: {
			src: "./images/photos/photo_1_laptop.png"
		},
		sources: [
			{
				srcSet: "./images/photos/photo_1_mobile.png",
				media: "(max-width: 800px)"
			},
			{
				srcSet: "./images/photos/photo_1_tablet.png",
				media: "(max-width: 1200px)"
			}
		]
	},
	Hills: {
		attributes: {
			src: "./images/photos/photo_2_laptop.png"
		},
		sources: [
			{
				srcSet: "./images/photos/photo_2_mobile.png",
				media: "(max-width: 800px)"
			},
			{
				srcSet: "./images/photos/photo_2_tablet.png",
				media: "(max-width: 1200px)"
			}
		]
	}
}

export type ImageNames = keyof typeof images
