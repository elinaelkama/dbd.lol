import { styled } from 'styled-components'
import { bpMedium, md, textPrimary } from '../style/DesignSystem'
import { useAppSelector } from '../hooks/redux'

type Props = {
	character: string
}


const Container = styled.div`
  display: grid;
  grid-template-columns: auto 30rem;
  grid-template-rows: 15rem;
  max-width: 20rem;
  color: ${textPrimary};
  font-family: sans-serif;
  justify-content: center;

  @media screen and (max-width: ${bpMedium}){
	display: flex;
	flex-wrap: wrap;
  }
`

const Image = styled.img`
max-height: 15rem;
`

const Header = styled.h3`
	font-size: ${md};
`

const Bio = styled.p`
`

const Character = ({ character }: Props) => {

	const name = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].name : "")
	const img = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].image : "")
	const bio = useAppSelector(state => state.character.data && state.character.data[character] ? state.character.data[character].bio : "")

	const imagePath = `/portraits/${img}`

	return (
		<Container>
			<div>
				<Image src={imagePath}></Image>
			</div>
			<div>
				<Header>{name}</Header>
				<Bio>{bio}</Bio>
			</div>
		</Container >
	)
}

export default Character
