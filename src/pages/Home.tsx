import { type FC } from "react"
import { Header, Intro, Partners, Benefits } from "../components/widgets"
import { Container, PageTitle } from "../components/shared"

const Home: FC = () => {
	return (
		<Container>
			<Header />
			<PageTitle text="Browse everything." />
			<Intro />
			<Partners />
			<Benefits />
		</Container>
	)
}

export default Home
