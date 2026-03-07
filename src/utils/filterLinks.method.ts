import type {
	NavigationLink,
	NavigationPosition
} from "./navigation.constants.ts"

export const filterLinksByPosition = (
	links: Array<NavigationLink>,
	position: NavigationPosition
): Array<NavigationLink> => {
	return links.filter(
		link => link.position === position || link.position === "both"
	)
}
