import { styled } from 'styled-components'
import { fontFamilyPrimary, md, textPrimary, xl, xs } from '../style/DesignSystem'
import type { ReactNode } from 'react'

type Props = {
	title: string
	subtitle: string
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

const Subtitle = styled.h4`
	font-family: ${fontFamilyPrimary};
	font-weight: 300;
	text-transform: capitalize;
	font-size: ${md};
	margin: ${xs} ${xs};
`

const Intro = ({ title, subtitle, children }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
			<Subtitle>{subtitle}</Subtitle>
			{children}
		</Container>
	)
}

export default Intro
