import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import './styles/app.css';
import { store } from './redux/store';
import { theme } from './constants/theme';
import Loader from './component/loader';
import Router from './router';
import AppLayout from './layout/appLayout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <AppLayout>
              <Router />
            </AppLayout>
          </BrowserRouter>
        </Suspense>
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);
