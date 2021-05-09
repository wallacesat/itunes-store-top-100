import * as React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';

import GlobalStyle from '~/styles/global';
import { AlbumsProvider } from '~/contexts/AlbumsContext';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlbumsProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AlbumsProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
