'use client';

import { ThemeProvider, ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';

export type AppProps = {
 children: React.ReactNode;
};

export const Wrapper = ({ children }: AppProps): JSX.Element => {
 return (
  <ToasterProvider>
   <ThemeProvider theme={'dark'}>{children}</ThemeProvider>{' '}
   <ToasterComponent className='optional additional classes' />
  </ToasterProvider>
 );
};
