import { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../hooks/redux'
import { bpSmall, fontFamilyPrimary, md, sm, textPrimary } from '../style/DesignSystem'
import { SettingsContext } from '../context/SettingsContext'

type Props = {
	perk: string
}

const Container = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	align-content: start;
	max-width: 20rem;
	align-items: center;
	color: ${textPrimary};
	font-family: ${fontFamilyPrimary};
	justify-items: center;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), transparent);
`

const Image = styled.img``

const Header = styled.h3`
	font-size: ${md};
	text-align: center;
`

const Desc = styled.div`
	font-size: ${sm};
	text-align: left;
	padding: 0 ${sm};

	@media screen and (min-width: ${bpSmall}) {
		max-height: 25rem;
		overflow: auto;
	}
`

const Perk = ({ perk }: Props) => {
	const { showPerkDescription } = useContext(SettingsContext)
	const descriptionTemplate = useAppSelector(state => (state.perk.data && state.perk.data[perk] ? state.perk.data[perk].description : ''))
	const tunables = useAppSelector(state => (state.perk.data && state.perk.data[perk] ? state.perk.data[perk].tunables : []))
	const name = useAppSelector(state => (state.perk.data && state.perk.data[perk] ? state.perk.data[perk].name : ''))
	const img = useAppSelector(state => (state.perk.data && state.perk.data[perk] ? state.perk.data[perk].image : ''))

	const imagePath = `/icons/${img}`

	const description = useMemo(() => {
		let desc: string = descriptionTemplate
		if (!tunables || typeof tunables !== 'object') return desc
		tunables.forEach((value: string[], i: number) => {
			desc = desc.replace(new RegExp(`\\{${i}\\}`, 'g'), value.join('/'))
		})

		return desc
	}, [descriptionTemplate, tunables])

	return (
		<Container>
			<div>
				<Image
					src={imagePath}
					onError={e => {
						e.currentTarget.src = '/icons/missing_icon.png'
					}}
				/>
			</div>
			<div>
				<Header>{name}</Header>
			</div>
			{showPerkDescription && <Desc>{description}</Desc>}
		</Container>
	)
}

export default Perk
