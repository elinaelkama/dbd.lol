import styled from "styled-components"
import { accent, border, bpMedium, md, shadow, sm, textPrimary, textSecondary, xxl } from "../style/DesignSystem"

type Props = {
	randomize: (role: string, roleNumber: number) => void
	setRoleNumber: (roleNumber: number) => void
	role: string
	roleNumber: number
}

const Container = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	gap: ${sm};
	width: 100vw;
	justify-content: center;
	padding: ${sm};
	box-sizing: border-box;
	@media screen and (max-width: ${bpMedium}) {
		background: linear-gradient(rgba(0,0,0, 1), rgba(0,0,0, 1));
	}
`

const Button = styled.button`
	border: ${border};
	border-radius: 6px;
	box-shadow: ${shadow};
	font-size: ${xxl};
	font-family: sans-serif;
	background: none;
	color: ${textPrimary};

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
`

const Option = styled.option`
	padding: 0 ${sm};
`

const Randomize = ({ randomize, setRoleNumber, role, roleNumber }: Props) => {
	return (
		<Container>
			<Button onClick={() => randomize(role, roleNumber)}>Randomize</Button>
			<Select size={4} onChange={e => setRoleNumber(parseInt(e.target.value))}>
				{[1, 2, 3, 4].map(i => (<Option selected={roleNumber === i} key={`random_${i}`}>{i}</Option>))}
			</Select>
		</Container>
	)
}

export default Randomize