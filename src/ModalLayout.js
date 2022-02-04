import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {closeReactModal} from './actions/ModalActions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        minWidth: '320px',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        maxHeight: '95%',
        overflow: 'auto',
        maxWidth: '80%'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 400ms ease-in-out'
    }
};

const ModalRoot = styled.div`
    font-family:Arial; 
    box-sizing:content-box;
    
    button:focus{
      outline:0;
    }
    .rrm-holder{
      position:static;
      width:auto;
      height:auto;
      top:0;
      left:0;
      
      .scroll{
        width:100%;
        height:100%;
        position:relative;
        z-index:1;
        
        .rrm-content{
          z-index:1;
          background-color:#fcfcfc;
          position:relative;
          border-radius:4px;
          box-shadow:none;
          margin: 0;
          
          &.m-small{
            width:320px;
          }
          
          &.m-medium{
            width:500px;
          }

          &.m-large{
            min-width: 800px;
          }
          
          &.m-huge{
            min-width: 1200px;
          }
          
          .rrm-title{
            width:100%;
            border-bottom:1px dashed #dbdbdb;
            position:relative;
            color:#444;
            box-sizing:content-box;
            display: flex;
            justify-content: space-between;
            
            h2{
              padding:5px 0 5px 22px;
              font-size:2em;
              margin: 8px 0 0 0;
              width: 100%;
              line-height:26px;
              box-sizing:content-box;
            }
            
            .rr-title-actions{
              width: 50px;
              height: 50px;
              text-align:center;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              
              button{
                width:40px;
                height:40px;
                position:relative;
                border:1px solid transparent;
                background-color:transparent;
                text-align:center;
                padding:0;
                color:#666;
                font-size:1.2em;
                border-radius:50%;
                
                &:hover{
                  color:#4186bf;
                  cursor:pointer;
                  background-color:rgba(65,134,191,.1);
                  border-color:rgba(65,134,191,.2);
                  box-shadow:2px 2px 3px #f0f0f0;
                }
              }
            }
          }
          .rrm-body{
            width:100%;
            padding:20px;
            
            .rrm-confirm{
              text-align: center;
              .btn{
                margin: 0 5px;
              }
            }
          }
          .confirm-modal-body{
            text-align: center;
            margin-top: 10px;
          }
        }
      }
      .rrm-shadow{
        width:100%;
        height:100%;
        background-color:rgba(50,58,68,.8);
        position:absolute;
        top:0;
        left:0;
        z-index:0;
      }
    }
    textarea{
      width: 100%;
      min-height: 100px;
      margin-bottom: 15px;
      font-size: 14px;
    }
    .button-holder{
      text-align: center;
      
      .button-submit{
        font-size: 1.4em;
        padding: 4px 15px;
        background: #437783;
        border: none;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: normal;
        color: #fff !important;
        text-decoration: none !important;
      }
    }
`;

const ModalLayout = ({appElement, title, size, closeReactModalAction, modal}) => {
    const ModalBody = modal.bodyComponent;
    const ModalTitle = modal.options.title || title || '';
    const ModalSize = modal.options.size || size || '';
    const closeReactModalHandler = () => {
        const res = closeReactModalAction();
        if (res && typeof res.then === 'function') {
            res.then(() => {
                if (modal.options.onAfterClose) {
                    modal.options.onAfterClose();
                }
            });
        } else {
            if (modal.options.onAfterClose) {
                modal.options.onAfterClose();
            }
        }
    };

    return (
        <Modal
            isOpen={modal.opened}
            closeTimeoutMS={100}
            onRequestClose={closeReactModalHandler}
            contentLabel={ModalTitle}
            style={customStyles}
            appElement={appElement}
            onAfterOpen={el => el.overlayEl.style.opacity = 1}
        >
            {modal.opened && ModalBody &&
            <ModalRoot>
                <div className="rr-modals">
                    <div className="rrm-holder">
                        <div className="scroll">
                            <div className={`rrm-content ${ModalSize ? `m-${ModalSize}` : 'm-large'}`}>
                                <div className="rrm-title">
                                    <h2>{ModalTitle}</h2>
                                    <div className="rr-title-actions">
                                        <button type="button" onClick={closeReactModalHandler}
                                            className="rr-close rrm-icon-cancel">X
                                        </button>
                                    </div>
                                </div>
                                <div className="rrm-body">
                                    <ModalBody {...modal.bodyComponentProps} removeModal={closeReactModalHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalRoot>
            }
        </Modal>
    );
};

ModalLayout.propTypes = {
    appElement: PropTypes.instanceOf(Element).isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),

    /** redux props */
    closeReactModalAction: PropTypes.func.isRequired,
    modal: PropTypes.shape({
        opened: PropTypes.bool,
        bodyComponentProps: PropTypes.object,
        bodyComponent: PropTypes.elementType,
        options: PropTypes.shape({
            title: PropTypes.string,
            size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
            onAfterClose: PropTypes.func
        })
    }).isRequired
};

export default connect(
    state => ({
        modal: state.modal
    }),
    dispatch => ({
        closeReactModalAction: () => dispatch(closeReactModal())
    })
)(ModalLayout);
