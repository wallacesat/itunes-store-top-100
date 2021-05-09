import * as React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwindcss/tailwind.css';

import GlobalStyle from '~/styles/global';
import { StorageProvider } from '~/contexts/StorageContext';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StorageProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </StorageProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
