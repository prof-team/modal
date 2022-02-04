import React from 'react';
import PropTypes from 'prop-types';

const MyModal = ({propContent, removeModal}) => {
    return <div>
        modal content

        <div>{propContent}</div>

        <button onClick={removeModal}>Close modal window</button>
    </div>;
};

MyModal.propTypes = {
    propContent: PropTypes.string.isRequired,
    removeModal: PropTypes.func.isRequired
};

export default MyModal;
