import { useMemo } from "react"
import { navigationLinks } from "../utils/navigation.constants.ts"
import { filterLinksByPosition } from "../utils/filterLinks.method.ts"

export const useNavigation = () => {
	const headerLinks = useMemo(
		() => filterLinksByPosition(navigationLinks, "header"),
		[]
	)

	const footerLinks = useMemo(
		() => filterLinksByPosition(navigationLinks, "footer"),
		[]
	)

	return {
		headerLinks,
		footerLinks
	}
}
