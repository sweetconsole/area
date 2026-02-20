import type { PictureAssets } from "../../../utils/assets.types.ts"

type Plan = {
	title: string
	features: Array<Feature>
}

type Feature = {
	icon: PictureAssets
	text: string
}

const CheckMark: PictureAssets = {
	attributes: {
		alt: "✓",
		src: "/images/marks/check_mark.svg"
	}
}

const CheckMarkGreen: PictureAssets = {
	attributes: {
		alt: "✔",
		src: "/images/marks/check_mark_green.svg"
	}
}

const CrossMark: PictureAssets = {
	attributes: {
		alt: "×",
		src: "/images/marks/cross_mark.svg"
	}
}

export const plans: Array<Plan> = [
	{
		title: "WebSurge",
		features: [
			{
				icon: CheckMark,
				text: "Fast browsing"
			},
			{
				icon: CheckMark,
				text: "Basic AI recommendations"
			},
			{
				icon: CrossMark,
				text: "Basic AI insights"
			},
			{
				icon: CheckMark,
				text: "Restricts customization"
			},
			{
				icon: CrossMark,
				text: "Potential display errors"
			}
		]
	},
	{
		title: "Area",
		features: [
			{
				icon: CheckMarkGreen,
				text: "Ultra-fast browsing"
			},
			{
				icon: CheckMarkGreen,
				text: "Advanced AI insights"
			},
			{
				icon: CheckMarkGreen,
				text: "Seamless integration"
			},
			{
				icon: CheckMarkGreen,
				text: "Advanced AI customization"
			},
			{
				icon: CheckMarkGreen,
				text: "Full UTF-8 support"
			}
		]
	},
	{
		title: "HyperView",
		features: [
			{
				icon: CrossMark,
				text: "Moderate speeds"
			},
			{
				icon: CrossMark,
				text: "No AI assistance"
			},
			{
				icon: CrossMark,
				text: "Steep learning curve"
			},
			{
				icon: CrossMark,
				text: "No AI assistance"
			},
			{
				icon: CrossMark,
				text: "Partial UTF-8 support"
			}
		]
	}
]
