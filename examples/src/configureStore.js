import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ModalReducer} from '@profteam/modal';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const coreMiddleware = [thunk];

const coreReducers = {
    modal: ModalReducer,
};

export default function configureStore(reducers, initialState, middleware = []) {
    const rootReducer = combineReducers({
        ...coreReducers,
        ...reducers,
    });

    const enhancer = composeEnhancers(
        applyMiddleware(...coreMiddleware.concat(middleware)),
    );

    return createStore(rootReducer, initialState, enhancer);
}