import type { PictureAssets } from "../../../utils/assets.types.ts"

type Benefit = {
	title: string
	description: string
	icon: PictureAssets
}

export const benefits: Array<Benefit> = [
	{
		title: "Amplify Insights",
		description:
			"Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
		icon: {
			attributes: {
				src: "/images/benefits/benefit_1_tablet.svg"
			},
			sources: [
				{
					srcSet: "/images/benefits/benefit_1_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/benefits/benefit_1_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		title: "Control Your Global Presence",
		description:
			"Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
		icon: {
			attributes: {
				src: "/images/benefits/benefit_2_tablet.svg"
			},
			sources: [
				{
					srcSet: "/images/benefits/benefit_2_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/benefits/benefit_2_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		title: "Remove Language Barriers",
		description:
			"Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
		icon: {
			attributes: {
				src: "/images/benefits/benefit_3_tablet.svg"
			},
			sources: [
				{
					srcSet: "/images/benefits/benefit_3_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/benefits/benefit_3_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	},
	{
		title: "Visualize Growth",
		description:
			"Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
		icon: {
			attributes: {
				src: "/images/benefits/benefit_4_tablet.svg"
			},
			sources: [
				{
					srcSet: "/images/benefits/benefit_4_mobile.svg",
					media: "(max-width: 800px)"
				},
				{
					srcSet: "/images/benefits/benefit_4_tablet.svg",
					media: "(max-width: 1200px)"
				}
			]
		}
	}
]
