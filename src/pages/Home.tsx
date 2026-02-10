import { type FC } from "react"
import {
	Header,
	Intro,
	Partners,
	Benefits,
	ImageViewer
} from "../components/widgets"
import { Container, PageTitle } from "../components/shared"

const Home: FC = () => {
	return (
		<Container>
			<Header />
			<PageTitle text="Browse everything." />
			<Intro />
			<Partners />
			<Benefits />
			<ImageViewer name={"Mountains"} />
		</Container>
	)
}

export default Home
