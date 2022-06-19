import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()

  const icon = useColorModeValue(<FaMoon />, <FaSun />)

  return (
    <IconButton
      size='sm'
      variant='ghost'
      colorScheme={useColorModeValue('telegram', 'orange')}
      onClick={toggleColorMode}
      icon={icon}
      aria-label='toggle-theme'
    ></IconButton>
  )
}

export default ColorModeSwitcher
