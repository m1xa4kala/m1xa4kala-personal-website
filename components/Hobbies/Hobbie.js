import { chakra, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const HobbieImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Hobbie = ({ img, heading }) => {
  return (
    <GridItem position='relative' maxWidth='md'>
      <HobbieImage src={img} borderRadius='md'  />
      <Heading position='absolute' left={5} top={5} as='h3' fontSize='3xl' color='#fd344b'>
        {heading}
      </Heading>
    </GridItem>
  )
}

export default Hobbie
