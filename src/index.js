// index.js sau App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './logic/store';  // Asigură-te că calea este corectă

import App from './App';  // sau calea către componenta ta principală

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);