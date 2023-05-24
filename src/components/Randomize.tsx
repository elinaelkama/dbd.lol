import styled from "styled-components"
import { accent, border, bpMedium, bpSmall, md, shadow, sm, textPrimary, textSecondary, xxl } from "../style/DesignSystem"
import { ReactNode } from "react"

type Props = {
	randomize: (role: string, roleNumber: number) => void
	randomizeCharacter: (role: string) => void
	setRoleNumber: (roleNumber: number) => void
	setRole: (role: string) => void
	role: string
	roleNumber: number
	children: ReactNode
}

const Container = styled.div`
	display: grid;
	position: fixed;
	grid-template-areas:
	'roles roles'
	'character character'
	'randomize select';
	bottom: 0;
	gap: ${sm};
	width: 100vw;
	justify-content: center;
	padding: ${sm};
	box-sizing: border-box;
	@media screen and (max-width: ${bpMedium}) {
		background: linear-gradient(rgba(0,0,0, 1), rgba(0,0,0, 1));
	}

	@media screen and (max-width: ${bpSmall}) {
		grid-template-areas:
		'roles select character'
		'randomize randomize randomize';
	}
`

const PerkButton = styled.button`
	border: ${border};
	border-radius: 6px;
	box-shadow: ${shadow};
	font-size: ${xxl};
	font-family: sans-serif;
	background: none;
	color: ${textPrimary};
	grid-area: randomize;

	&:hover{
		cursor: pointer;
		background-color: ${accent};
		color: ${textSecondary};
	}
`

const Select = styled.select`
	overflow: hidden;
	font-size: ${md};
	border: ${border};
	box-sizing: border-box;
	background-color: transparent;
	box-shadow: 1px 1px 1px black;
	color: ${textPrimary};
	grid-area: select;

`
const CharacterButton = styled.button`
	border:${border};
	border-radius: 2px;
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	background: none;
	text-transform: capitalize;
	margin: auto;

	&:hover{
		cursor: pointer;
		background-color: ${accent};
		color: ${textSecondary};
	}
`

const Option = styled.option`
	padding: 0 ${sm};
`

type ButtonProps = {
	isActive: boolean
}

const RoleContainer = styled.div`
	display: flex;
	gap: 1rem;
	grid-area: roles;
	margin: auto;
`

const RoleButton = styled.button<ButtonProps>`
	border:${border};
	border-radius: 2px;
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	text-transform: capitalize;
	background: ${props => props.isActive ? "red" : "none"};

	&:hover{
		cursor: pointer;
		background-color: ${accent};
		color: ${textSecondary};
	}
`

const Randomize = ({ setRole, randomize, randomizeCharacter, setRoleNumber, role, roleNumber }: Props) => {

	const randomizeAll = () => {
		randomize(role, roleNumber)
		randomizeCharacter(role)
	}

	return (
		<Container>
			<RoleContainer>
				{["survivor", "killer"].map(roleName => (<RoleButton isActive={role === roleName} onClick={() => setRole(roleName)}>{roleName}</RoleButton>))}
			</RoleContainer>
			<PerkButton onClick={() => randomizeAll()}>Randomize</PerkButton>
			<Select size={4} onChange={e => setRoleNumber(parseInt(e.target.value))}>
				{[1, 2, 3, 4].map(i => (<Option selected={roleNumber === i} key={`random_${i}`}>{i}</Option>))}
			</Select>
		</Container>
	)
}

export default Randomize