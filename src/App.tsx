import { useDispatch } from 'react-redux'
import './App.css'
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from 'react'
import { loadCharacterData, loadPerkData } from './store/actions'
import perkData from './assets/refined_perks.json'
import { PerkCollection } from './types/PerkCollection'
import Perk from './components/Perk'
import { useAppSelector } from './hooks/redux'
import PerkDisplay from './components/PerkDisplay'
import styled from 'styled-components'
import Randomize from './components/Randomize'
import Intro from './components/Intro'
import bg from './assets/bg_rpd.jpg'
import { bpSmall } from './style/DesignSystem'
import characterData from './assets/refined_characters.json'
import { CharacterCollection } from './types/CharacterCollection'
import CharacterDisplay from './components/CharacterDisplay'
import Character from './components/Character'

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 13rem;
  margin: auto;
  min-height: 100vh;
  @media screen and (max-width: ${bpSmall}) {
	  grid-template-rows: auto auto auto 15rem;
	}
`

const AppContainer = styled.div`
  position: relative;
  background: linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.6)), url(${bg});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 4rem 4rem black;
`

function App() {

  const dispatch = useDispatch()

  const perks = useAppSelector(state => state.perk.data ? state.perk.data : {})
  const characters = useAppSelector(state => state.character.data ? state.character.data : {})

  const [randomPerkNames, setRandomPerkNames] = useState<string[]>([])
  const [randomCharacterName, setRandomCharacterName] = useState<string>()
  const [role, setRole] = useState("survivor")

  useEffect(() => {
    dispatch(loadPerkData(perkData as PerkCollection))
    dispatch(loadCharacterData(characterData as CharacterCollection))
  }, [dispatch])

  const initialized = Object.keys(perks).length > 0 && Object.keys(characters).length > 0

  const randomizePerks = (role: string, roleNumber: number) => {
    const filteredPerkNames = Object.keys(perks)
      .filter(key => perks[key].role === role)
      .sort(() => Math.random() - 0.5)

    const perkCount = roleNumber;
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
      .sort(() => Math.random() - 0.5);

    const selectedCharacterName = filteredCharacters[0]
    setRandomCharacterName(selectedCharacterName)
  }

  return (
    <AppContainer>
      <Container>
        <Intro title="DBD Perk Randomizer" />
        <CharacterDisplay>{randomCharacterName && <Character character={randomCharacterName} />}</CharacterDisplay>
        <PerkDisplay>
          {randomPerkNames && randomPerkNames.map(name => (<Perk key={name} perk={name} />))}
        </PerkDisplay>
        <div></div>
      </Container>
      <Randomize setRole={setRole} role={role} randomizePerks={randomizePerks} randomizeCharacter={randomizeCharacter} initialized={initialized} />
    </AppContainer >
  )
}

export default App
