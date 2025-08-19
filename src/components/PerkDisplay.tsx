import type { ReactNode } from 'react'
import styled from 'styled-components'
import { md } from '../style/DesignSystem'

type Props = {
	children: ReactNode
}

const Display = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0 ${md};
	min-height: 40rem;
	justify-content: space-evenly;
`

const PerkDisplay = ({ children }: Props) => {
	return <Display>{children}</Display>
}

export default PerkDisplay
