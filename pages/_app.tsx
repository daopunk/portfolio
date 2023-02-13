import '@fontsource/source-code-pro/700.css';
import '@fontsource/roboto-mono/300.css';
import '../styles/canvas.css';
import '../styles/neonhuman.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    initialColorMode: 'dark',
    heading: `'Roboto Mono', monospace`,
    body: `'Roboto Mono', monospace`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
