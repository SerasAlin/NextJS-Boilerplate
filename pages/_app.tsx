import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next';

import { ContextProvider } from '../components/Context';
import store from '../lib/redux/store';
import Layout from '../components/Common/Layout';

interface MyAppPropsType {
  Component: any,
  pageProps: any
}


const MyApp = ({ Component, pageProps }: MyAppPropsType) => {
  return (
    <ContextProvider>
      <SWRConfig>
        <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </Provider>
      </SWRConfig>
    </ContextProvider>
  )

};

export default appWithTranslation(MyApp);
