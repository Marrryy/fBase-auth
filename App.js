import React from 'react';
import Main from "./components/MainComponents";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './redux/index';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main/>
      </PersistGate>
    </Provider>
  );
}