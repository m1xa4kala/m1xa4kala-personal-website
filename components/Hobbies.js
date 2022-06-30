import { Heading, HStack } from '@chakra-ui/react'
import { FaHeart, FaVolleyballBall } from 'react-icons/fa'

const Hobbies = () => {
  return (
    <>
      <HStack>
    <Heading>A couple of things I really</Heading>
        <FaHeart size={30} color='#fd344b' />
      </HStack>
      <FaVolleyballBall />
    </>

  )
}

export default Hobbies
