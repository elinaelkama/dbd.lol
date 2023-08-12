import styled from "styled-components"
import { accent, border, md, textPrimary, xs } from "../style/DesignSystem"

type Props = {
	name: string,
	value: boolean,
	setValue: (value: boolean) => void
}

const ToggleContainer = styled.label`
	display: flex;
	font-size: ${md};
	align-content: center;
	gap: ${xs};
	background-color: black;
`

const Checkbox = styled.input`
	height: ${md};
	width: ${md};
	cursor: pointer;
	accent-color: black;
	outline: 3px solid ${accent};
	accent-color: red;

	&:checked{
		outline: ${border};
		accent-color: red;
	}
`

const Toggle = ({ name, value, setValue }: Props) => {
	return (
		<ToggleContainer>
			<div>{name}</div>
			<div><Checkbox type="checkbox" checked={value} onChange={() => setValue(!value)} /></div>
		</ToggleContainer>
	)
}

export default Toggle