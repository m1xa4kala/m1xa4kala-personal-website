import { SimpleGrid } from '@chakra-ui/react'
import volleyball from '../../public/images/volleyball.png'
import anime from '../../public/images/anime.jpg'
import music from '../../public/images/music.webp'
import Hobbie from './Hobbie'

const Hobbies = () => {
  return (
    <SimpleGrid width='full' columns={['1', '1', '1', '2']} gap={4}>
      <Hobbie img={volleyball} heading='Volleyball' />
      <Hobbie img={anime} heading='Anime' />
      <Hobbie img={music} heading='Music' />
      <Hobbie img={volleyball} heading='Volleyball' />
    </SimpleGrid>
  )
}

export default Hobbies
