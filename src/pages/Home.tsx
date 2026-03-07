import { type FC } from "react"
import {
	Header,
	Intro,
	Partners,
	Benefits,
	ImageViewer,
	BigPicture,
	Specifications,
	Review,
	HowItWorks,
	ContactUs,
	Footer
} from "../components/widgets"
import { Container, PageTitle } from "../components/shared"

const Home: FC = () => {
	return (
		<>
			<Header />

			<Container>
				<PageTitle text="Browse everything." />
				<Intro />
				<Partners />
				<Benefits />
				<ImageViewer name={"Mountains"} />
				<BigPicture />
				<Specifications />
				<Review />
				<HowItWorks />
				<ImageViewer name={"Hills"} />
				<ContactUs />
				<Footer />
			</Container>
		</>
	)
}

export default Home
