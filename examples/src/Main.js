import React from 'react';
import {useDispatch} from "react-redux";
import {confirmModal} from "../../src";

export default function () {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(confirmModal(() => {
            console.log('confirmed');
        }))
    }

    return <div>
        <button className={'btn btn-primary'} onClick={handleClick}>Confirm me</button>
    </div>
}