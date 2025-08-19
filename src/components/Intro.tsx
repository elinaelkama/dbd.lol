import { styled } from 'styled-components'
import { fontFamilyPrimary, textPrimary, xl, xs } from '../style/DesignSystem'
import type { ReactNode } from 'react'

type Props = {
	title: string
	children?: ReactNode
}

const Container = styled.div`
	margin: auto;
	color: ${textPrimary};
	justify-content: center;
	text-align: center;
`
const Header = styled.h1`
	font-family: ${fontFamilyPrimary};
	font-weight: 600;
	text-transform: uppercase;
	font-size: ${xl};
	margin-bottom: ${xs};
`

const Intro = ({ title, children }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
			{children}
		</Container>
	)
}

export default Intro
