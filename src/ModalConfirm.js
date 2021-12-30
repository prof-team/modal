import React from 'react';
import PropTypes from 'prop-types';

const ModalConfirm = ({removeModal, onConfirm}) => {
    const confirmAction = () => {
        let res = removeModal();
        if (res && typeof res.then === 'function') {
            res.then(() => {
                onConfirm();
            });
        } else {
            onConfirm();
        }
    };

    return <div className="rrm-confirm">
        <button className="btn greeni btn-confirm" onClick={confirmAction}>Confirm</button>
        <button className="btn red md-close" onClick={removeModal}>Cancel</button>
    </div>;
};

ModalConfirm.propTypes = {
    removeModal: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ModalConfirm;