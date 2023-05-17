import { styled } from "styled-components"
import { md, textPrimary, xl } from "../style/DesignSystem"

type Props = {
	title: string
	about: string
}

const Container = styled.div`
	margin: auto;
	color: ${textPrimary};
	justify-content: center;
`
const Header = styled.h1`
	font-family: sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	font-size: ${xl};
`

const About = styled.h3`
	font-family: sans-serif;
	font-size: ${md};
`

const Intro = ({ title, about }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
			<About>{about}</About>
		</Container >
	)
}

export default Intro