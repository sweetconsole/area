export const Image = {
	attributes: {
		src: "./images/big_picture_laptop.jpg"
	},
	sources: [
		{
			srcSet: "./images/big_picture_mobile.jpg",
			media: "(max-width: 800px)"
		},
		{
			srcSet: "./images/big_picture_tablet.jpg",
			media: "(max-width: 1200px)"
		}
	]
}

export const features: Array<string> = [
	"Spot Trends in Seconds: No more digging through numbers. ",
	"Get Everyone on the Same Page: Share easy-to-understand reports with your team. ",
	"Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
	"Your Global Snapshot: Get a quick, clear overview of your entire operation."
]
