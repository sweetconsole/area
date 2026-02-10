import type { PictureAssets } from "../../../utils/assets.types.ts"

type Partner = {
	logo: PictureAssets
}

export const partners: Array<Partner> = [
	{
		logo: {
			attributes: {
				alt: "Partner One",
				src: "/images/partners/partner_1_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_1_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_1_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		logo: {
			attributes: {
				alt: "Partner Two",
				src: "/images/partners/partner_2_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_2_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_2_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		logo: {
			attributes: {
				alt: "Partner Three",
				src: "/images/partners/partner_3_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_3_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_3_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		logo: {
			attributes: {
				alt: "Partner Four",
				src: "/images/partners/partner_4_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_4_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_4_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		logo: {
			attributes: {
				alt: "Partner Five",
				src: "/images/partners/partner_5_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_5_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_5_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		logo: {
			attributes: {
				alt: "Partner Six",
				src: "/images/partners/partner_6_laptop.svg"
			},
			sources: [
				{
					srcSet: "/images/partners/partner_6_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/partners/partner_6_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	}
]
