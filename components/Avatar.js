import { chakra, Box } from '@chakra-ui/react'
import mike from '../public/images/avatar.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProfileAvatar = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Avatar = () => {
  return (
    <Box
      overflow='hidden'
      borderRadius='full'
      borderWidth={2}
      borderStyle='solid'
      display='inline-block'
      w='100px'
      h='100px'
    >
      <motion.div style={{ display: 'inline=block' }} animate={{ scale: 1.7 }}>
        <ProfileAvatar src={mike} borderRadius='full' alt='Mike avatar' />
      </motion.div>
    </Box>
  )
}

export default Avatar
