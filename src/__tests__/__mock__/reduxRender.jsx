import React from 'react';
import {render as rtlRender} from '@testing-library/react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import modalReducer from '../../reducers/ModalReducer';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

const rootReducer = combineReducers({
    modal: modalReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
const baseElement = document.createElement('div');

function render (ui, {...renderOptions} = {}) {
    function Wrapper ({children}) {
        return <Provider store={store}>
            <div>
                {children}
            </div>
        </Provider>;
    }

    Wrapper.propTypes = {
        children: PropTypes.object,
    };

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react';
// override render method
export {render, baseElement, store};
