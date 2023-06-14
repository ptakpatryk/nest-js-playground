import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from '../router/root-router';

type Props = {
  children: ReactNode;
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

export const Providers = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={rootRouter} />
    </ChakraProvider>
  )
}
