import { GridItem, HStack } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'
import Avatar from '../components/Avatar'
import Info from '../components/Info'
import About from '../components/About'

const index = () => {
  return (
    <Layout title='Home'>
      <GridItem>
        <HStack>
         <Avatar />
          <Info />
        </HStack>
      </GridItem>
      <GridItem>
        <About />
      </GridItem>
    </Layout>
  )
}

export default index
