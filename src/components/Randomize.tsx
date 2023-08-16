import styled from "styled-components"
import { accent, border, bpLarge, bpSmall, lg, md, shadow, sm, textPrimary, textSecondary, xxl } from "../style/DesignSystem"
import { useEffect, useState } from "react"
import Popup from "reactjs-popup"
import { DiAptana } from "react-icons/di";
import Toggle from "./Toggle";

type Props = {
	randomizePerks: (role: string, roleNumber: number) => void
	randomizeCharacter: (role: string | null) => void
	setRole: (role: string) => void
	initialized: boolean
	role: string
}

const Container = styled.div`
	display: grid;
	position: fixed;
	grid-template-areas:
	'roles  popup'
	'randomize randomize';
	bottom: 0;
	gap: ${sm};
	width: 100vw;
	justify-content: center;
	padding: ${sm};
	box-sizing: border-box;
	@media screen and (max-width: ${bpLarge}) {
		background: linear-gradient(rgba(0,0,0, 1), rgba(0,0,0, 1));
	}

	@media screen and (max-width: ${bpSmall}) {
		grid-template-areas:
		'roles popup'
		'randomize randomize';
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

type ButtonProps = {
	is_active: string
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
	background: ${props => props.is_active === "true" ? "red" : "none"};

	&:hover{
		cursor: pointer;
		background-color: ${accent};
		color: ${textSecondary};
	}
`

const ModalContainer = styled.div`
	box-shadow: ${shadow};
	background-color: black;
`

const ModalContent = styled.div`
	color: ${textPrimary};
	text-transform: capitalize;
	font-family: sans-serif;
	padding: ${sm};

	& > h1, h2, h3{
		font-size: ${lg};
		font-weight: 300;
		text-align: center;
	}

	& > p{
		font-size: ${md};
	}
`

const PopUpButton = styled.button`
	border:${border};
	border-radius: 2px;
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	background: none;
	grid-area: popup;
`

const Randomize = ({ setRole, randomizePerks, randomizeCharacter, initialized, role }: Props) => {

	const [includeCharacter, setIncludeCharacter] = useState(true)

	const randomizeAll = () => {
		randomizePerks(role, 4)
		randomizeCharacter(includeCharacter ? role : null)
	}

	useEffect(() => {
		if (!initialized) {
			return
		}
		randomizeAll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialized])

	return (
		<Container>
			<Popup trigger={<PopUpButton className="button"><DiAptana /></PopUpButton>} modal>
				<ModalContainer>
					<ModalContent>
						<h2>Settings</h2>
						<p>Perks: always on</p>
						<Toggle name={"Character"} value={includeCharacter} setValue={(value) => setIncludeCharacter(value)}></Toggle>
					</ModalContent>
				</ModalContainer>
			</Popup>
			<RoleContainer>
				{["survivor", "killer"].map(roleName => (<RoleButton key={roleName} is_active={role === roleName ? "true" : ""} onClick={() => setRole(roleName)}>{roleName}</RoleButton>))}
			</RoleContainer>
			<PerkButton onClick={() => randomizeAll()}>Randomize</PerkButton>
		</Container>
	)
}

export default Randomize