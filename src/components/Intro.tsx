import { styled } from "styled-components"
import { textPrimary, xl } from "../style/DesignSystem"

type Props = {
	title: string
}

const Container = styled.div`
	margin: auto;
	color: ${textPrimary};
	justify-content: center;
	text-align: center;
`
const Header = styled.h1`
	font-family: sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	font-size: ${xl};
`

const Intro = ({ title }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
		</Container >
	)
}

export default Intro