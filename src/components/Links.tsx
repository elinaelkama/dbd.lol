import { FaDiscord } from 'react-icons/fa6'
import styled from 'styled-components'
import { fontFamilyPrimary, hoverColor, md, textPrimary, xs } from '../style/DesignSystem'

const Display = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`

const Link = styled.a`
	display: flex;
	align-items: center;
	gap: ${xs};
	font-size: ${md};
	color: ${textPrimary};
	text-decoration: none;
	font-family: ${fontFamilyPrimary};
	padding: 0;

	&:hover {
		cursor: pointer;
		color: ${hoverColor};
	}
`

const Links = () => {
	return (
		<Display>
			<Link href='https://discord.gg/Xde7C47kYD'>
				<FaDiscord /> Discord
			</Link>
		</Display>
	)
}

export default Links
