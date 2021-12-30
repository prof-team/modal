import {OPEN_REACT_MODAL, CLOSE_REACT_MODAL} from '../actions/ModalActions';

export const initialState = {
    opened: false,
    bodyComponent: null,
    bodyComponentProps: {},
    options: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_REACT_MODAL:
            return action.payload;

        case CLOSE_REACT_MODAL:
            return initialState;

        default:
            return state;
    }
}