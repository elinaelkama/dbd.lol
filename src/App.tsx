import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'
import './App.css'
import bg from './assets/bg_rpd.jpg'
import characterData from './assets/refined_characters.json'
import perkData from './assets/refined_perks.json'
import Character from './components/Character'
import CharacterDisplay from './components/CharacterDisplay'
import Intro from './components/Intro'
import Links from './components/Links'
import Perk from './components/Perk'
import PerkDisplay from './components/PerkDisplay'
import Randomize from './components/Randomize'
import { useAppSelector } from './hooks/redux'
import { loadCharacterData, loadPerkData } from './store/actions'
import { bpSmall, md } from './style/DesignSystem'
import type { CharacterCollection } from './types/CharacterCollection'
import type { PerkCollection } from './types/PerkCollection'
import { SettingsProvider } from './context/SettingsContext'

const Container = styled.div`
	display: grid;
	grid-template-rows: auto auto auto 13rem;
	gap: ${md};
	margin: auto;
	min-height: 100vh;
	@media screen and (max-width: ${bpSmall}) {
		grid-template-rows: auto auto auto 15rem;
	}
`

const AppContainer = styled.div`
	position: relative;
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${bg});
	background-size: cover;
	background-position: center;
	box-shadow: 0 0 4rem 4rem black;
`

function App() {
	const dispatch = useDispatch()

	const perks = useAppSelector(state => (state.perk.data ? state.perk.data : {}))
	const characters = useAppSelector(state => (state.character.data ? state.character.data : {}))

	const [randomPerkNames, setRandomPerkNames] = useState<string[]>([])
	const [randomCharacterName, setRandomCharacterName] = useState<string>()

	useEffect(() => {
		dispatch(loadPerkData(perkData as PerkCollection))
		dispatch(loadCharacterData(characterData as CharacterCollection))
	}, [dispatch])

	const initialized = Object.keys(perks).length > 0 && Object.keys(characters).length > 0

	const randomizePerks = (role: string, roleNumber: number) => {
		const filteredPerkNames = Object.keys(perks)
			.filter(key => perks[key].role === role)
			.sort(() => Math.random() - 0.5)

		const perkCount = roleNumber
		const selectedPerkNames = filteredPerkNames.slice(0, perkCount)

		setRandomPerkNames(selectedPerkNames)
	}

	const randomizeCharacter = (role: string | null) => {
		if (!role) {
			setRandomCharacterName(undefined)
			return
		}
		const filteredCharacters = Object.keys(characters)
			.filter(key => characters[key].role === role)
			.sort(() => Math.random() - 0.5)

		const selectedCharacterName = filteredCharacters[0]
		setRandomCharacterName(selectedCharacterName)
	}

	return (
		<AppContainer>
			<SettingsProvider>
				<Container>
					<Intro title='DBD Perk Randomizer'>
						<Links />
					</Intro>
					<CharacterDisplay>{randomCharacterName && <Character character={randomCharacterName} />}</CharacterDisplay>
					<PerkDisplay>{randomPerkNames && randomPerkNames.map(name => <Perk key={name} perk={name} />)}</PerkDisplay>
					<div></div>
				</Container>
				<Randomize randomizePerks={randomizePerks} randomizeCharacter={randomizeCharacter} initialized={initialized} />
			</SettingsProvider>
		</AppContainer>
	)
}
export default App
