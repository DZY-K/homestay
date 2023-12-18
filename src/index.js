import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App.jsx';
import "normalize.css"
import "@/assets/css/index.less"
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback={"Loading"}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
)