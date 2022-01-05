import React from 'react';
import {useDispatch} from "react-redux";
import {confirmModal, openReactModal} from "@profteam/modal";
import Modal from "./Modal";

const MyButton = ({handler, body}) => {
    return <div>
        <button className={'btn btn-primary btn-lg mb-3'} onClick={handler}>
            {body}
        </button>
    </div>;
}

export default function () {
    const dispatch = useDispatch();

    return <div className={'text-center'}>
        <h1 className={'mb-5 mt-5'}>Modals for fast development</h1>

        <MyButton
            handler={() => dispatch(confirmModal(() => alert('Confirmed!')))}
            body={'open confirm modal'}
        />

        <MyButton
            handler={() => dispatch(openReactModal(Modal, {}, {}))}
            body={'open modal with default options'}
        />

        <MyButton
            handler={() => dispatch(openReactModal(Modal, {}, {size: 'small'}))}
            body={'open small modal'}
        />

        <MyButton
            handler={() => dispatch(openReactModal(Modal, {}, {size: 'medium'}))}
            body={'open medium modal'}
        />

        <MyButton
            handler={() => dispatch(openReactModal(Modal, {}, {size: 'large'}))}
            body={'open large modal'}
        />

        <MyButton
            handler={() => dispatch(openReactModal(Modal, {}, {size: 'huge'}))}
            body={'open huge modal'}
        />
    </div>
}