import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          aria-label='Toggle theme'
          variant='ghost'
          colorScheme={useColorModeValue('cyan', 'orange')}
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ColorModeSwitcher
