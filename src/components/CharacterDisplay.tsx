import type { ReactNode } from 'react'
import styled from 'styled-components'
import { md } from '../style/DesignSystem'

type Props = {
	children: ReactNode
}

const Display = styled.div`
	gap: 0 ${md};
	margin: auto;
	filter: saturate(1.3);
`

const CharacterDisplay = ({ children }: Props) => {
	return <Display>{children}</Display>
}

export default CharacterDisplay
