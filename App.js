import React from 'react';
import Main from "./components/MainComponents";
import { Provider } from 'react-redux';
import store from './redux/index';

export default function App() {
  return (
    <Provider store={store}>
        <Main/>
    </Provider>
  );
}