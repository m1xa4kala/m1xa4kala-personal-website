import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('cultured', 'darkJungle')(props),
    },
  }),
}

const colors = {
  darkJungle: '#0a1929',
  cultured: '#f3f6f9',
  raisinBlack: '#232020',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const components = {
  Heading: {
    baseStyle: props => ({
      fontFamily: 'Dosis',
      color: mode('darkJungle', '#fff')(props),
      size: 'md',
      fontWeight: 400,
    }),
    variants: {
      'section-title': props => ({
        textDecoration: 'underline',
        size: 'md',
        textUnderlineOffset: 7,
        textDecorationColor: mode('raisinBlack', 'gray.600')(props),
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 3,
      }),
      'page-title': {
        fontSize: '4xl',
        lineHeight: 1.2,
        fontWeight: 500,
      },
    },
  },
}

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
})

export default theme
