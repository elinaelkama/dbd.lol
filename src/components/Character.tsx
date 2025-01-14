import { styled } from 'styled-components'
import { bpMedium, fontFamilyPrimary, md, sm, textPrimary, xl } from '../style/DesignSystem'
import { useAppSelector } from '../hooks/redux'
import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext'

type Props = {
	character: string
}


const Container = styled.div`
  display: grid;
  grid-template-columns: auto 30rem;
  grid-template-rows: 15rem;
  max-width: 20rem;
  color: ${textPrimary};
  font-family: ${fontFamilyPrimary};
  justify-content: center;

  @media screen and (max-width: ${bpMedium}){
	display: flex;
	flex-wrap: wrap;
  }
`

const Image = styled.img`
max-height: 15rem;
`

const Header = styled.h3<{ $big: boolean }>`
	font-size: ${({ $big }) => $big ? xl : md};
	padding: 0 ${sm};

	@media screen and (max-width: ${bpMedium}){
		text-align: center;
	}
`

const Bio = styled.p`
	padding: 0 ${sm};
`

const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Character = ({ character }: Props) => {
	const { showCharacter, showCharacterBio } = useContext(SettingsContext)
	const name = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].name : "")
	const img = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].image : "")
	const bio = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].bio : "")

	const imagePath = `/portraits/${img}`

	if (!showCharacter) return null

	return (
		<Container>
			<div>
				<Image src={imagePath}></Image>
			</div>
			<DetailContainer>
				<Header $big={!showCharacterBio}>{name}</Header>
				{showCharacterBio && (<Bio>{bio}</Bio>)}
			</DetailContainer>
		</Container >
	)
}

export default Character
