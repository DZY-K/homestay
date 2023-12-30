import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App.jsx';
import "normalize.css"
import "@/assets/css/index.less"
import store from './store';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import theme from './assets/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StyleSheetManager>

    <Provider store={store}>
      <Suspense fallback={"Loading"}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>

  </StyleSheetManager>
  // </React.StrictMode>
)