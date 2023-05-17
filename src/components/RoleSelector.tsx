import styled from "styled-components"
import { accent, border, md, shadow, textPrimary, textSecondary } from "../style/DesignSystem"

type Props = {
	setRole: (role: string) => void
	role: string
}

type ButtonProps = {
	isActive: boolean
}

const Container = styled.div`
	display: flex;
	gap: 2rem;
	margin: auto;
`

const Button = styled.button<ButtonProps>`
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

const RoleSelector = ({ setRole, role }: Props) => {
	return (
		<Container>
			{["survivor", "killer"].map(roleName => (<Button isActive={role === roleName} onClick={() => setRole(roleName)}>{roleName}</Button>))}
		</Container>
	)
}

export default RoleSelector