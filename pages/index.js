import { Heading, HStack } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'
import About from '../components/About'
import Hobbies from '../components/Hobbies/Hobbies'
import { FaHeart } from 'react-icons/fa'

const index = () => {
  return (
    <Layout title='Home'>
      <About />
      <HStack alignSelf='start'>
        <Heading>A couple of things I really</Heading>
        <FaHeart size={30} color='#fd344b' />
      </HStack>
      <Hobbies />
    </Layout>
  )
}

export default index
