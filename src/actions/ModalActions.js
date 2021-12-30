import ModalConfirm from './../ModalConfirm';

export const OPEN_REACT_MODAL = 'OPEN_REACT_MODAL';
export const CLOSE_REACT_MODAL = 'CLOSE_REACT_MODAL';

export const confirmModal = (onConfirm,  title = 'Are you sure?' ) => {
    return (dispatch) => {
        return dispatch(openReactModal(ModalConfirm, {onConfirm: onConfirm}, {
            title: title,
            size: 'medium'
        }));
    };
};

export const openReactModal = (component, props, options = {}) => {
    return {
        type: OPEN_REACT_MODAL,
        payload: {
            opened: true,
            bodyComponent: component,
            bodyComponentProps: props,
            options: options,
        }
    };
};

export const closeReactModal = () => {
    return {
        type: CLOSE_REACT_MODAL
    };
};