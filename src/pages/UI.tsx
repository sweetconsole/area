import { type FC } from "react"
import {
	Caption,
	Container,
	PageTitle,
	Paragraph,
	SectionTitle,
	CardTitle,
	Label,
	Button
} from "../components/shared"

const UI: FC = () => {
	return (
		<Container>
			<br />
			<PageTitle text="UI-Kit" textAlign="left" />
			<br />
			<Caption text="Caption" />
			<br />
			<SectionTitle text="Section Title" />
			<br />
			<Paragraph>Paragraph</Paragraph>
			<br />
			<CardTitle text="Card Title" />
			<br />
			<Label text="Label" />
			<br />
			<Button>Button</Button>
		</Container>
	)
}

export default UI
