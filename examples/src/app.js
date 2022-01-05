import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./configureStore";
import Main from "./components/Main";
import {ModalLayout} from "@profteam/modal";

const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={configureStore([], {})}>
        <Main />

        <ModalLayout appElement={appElement} title={'Test Modal'} size={'large'} />
    </Provider>,
    appElement,
);