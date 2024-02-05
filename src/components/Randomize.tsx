import { useEffect, useState } from "react";
import { FaGear, FaXmark } from "react-icons/fa6";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { border, bpLarge, bpSmall, fontFamilyPrimary, hoverBackground, hoverColor, lg, md, shadow, sm, textPrimary, xs, xxl } from "../style/DesignSystem";
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
	border-radius: ${xs};
	box-shadow: ${shadow};
	font-size: ${xxl};
	font-family: ${fontFamilyPrimary};
	background: none;
	color: ${textPrimary};
	grid-area: randomize;

	&:hover{
		cursor: pointer;
		background: ${hoverBackground};
		color: ${hoverColor};
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
	border-radius: ${xs};
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	text-transform: capitalize;
	background: ${props => props.is_active === "true" ? "red" : "none"};

	&:hover{
		cursor: pointer;
		background: ${hoverBackground};
		color: ${hoverColor};
	}
`

const ModalContainer = styled.div`
	box-shadow: ${shadow};
	background-color: black;
`

const ModalContent = styled.div`
	color: ${textPrimary};
	text-transform: capitalize;
	font-family: ${fontFamilyPrimary};
	padding: ${sm};
	position: relative;

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
	display: flex;
	justify-content: center;
	align-items: center;
	border:${border};
	border-radius: ${xs};
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	background: none;
	grid-area: popup;

	&:hover{
		cursor: pointer;
		background: ${hoverBackground};
		color: ${hoverColor};
	}
`

const CloseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border:${border};
	border-radius: ${xs};
	box-shadow: ${shadow};
	font-size: ${md};
	color: ${textPrimary};
	background: none;
	grid-area: popup;
	position: absolute;
	top: 0;
	right: 0;
	margin: ${sm};

	&:hover{
		cursor: pointer;
		background: ${hoverBackground};
		color: ${hoverColor};
	}
`

const Randomize = ({ setRole, randomizePerks, randomizeCharacter, initialized, role }: Props) => {

	const [includeCharacter, setIncludeCharacter] = useState(true)
	const [settingsOpen, setSettingsOpen] = useState(false)

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
			<PopUpButton onClick={() => setSettingsOpen(true)}><FaGear /></PopUpButton>
			<Popup open={settingsOpen} onClose={() => setSettingsOpen(false)} modal closeOnEscape>
				<ModalContainer>
					<ModalContent>
						<CloseButton onClick={() => setSettingsOpen(false)}><FaXmark /></CloseButton>
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