export type NavigationPosition = "header" | "footer" | "both"

export type NavigationLink = {
	label: string
	path: string
	position: NavigationPosition
}

export const navigationLinks: Array<NavigationLink> = [
	{
		label: "Benefits",
		path: "benefits",
		position: "both"
	},
	{
		label: "Specifications",
		path: "specifications",
		position: "both"
	},
	{
		label: "How-to",
		path: "how-to",
		position: "both"
	},
	{
		label: "Contact Us",
		path: "contact-us",
		position: "header"
	}
]
