import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './redux/reducers';
import HomePage from './pages/HomePage';

import { initialize } from './config/core';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Storage = {
    setItem: (key, value) => Promise.resolve().then(() => { localStorage.setItem(key, value); }),
    getItem: key => Promise.resolve().then(() => localStorage.getItem(key))
};

export default class App extends React.Component {

    constructor(){
        super();
        initialize(Storage);
    }

    render() {
        return (
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
    }
};
