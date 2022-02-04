import React from 'react';
import {render, fireEvent, baseElement, store} from './__mock__/reduxRender';
import ModalLayout from '../ModalLayout';
import {closeReactModal, confirmModal} from '../actions/ModalActions';

describe('Render Modal Layout', () => {
    it('confirm modal', async () => {
        const {getByRole, getByText, queryByRole, container} = render(<ModalLayout appElement={baseElement} title={'Test modal'} size={'small'}/>);
        expect(queryByRole(container, 'button', {name: /Confirm/i})).toBeNull();

        let confirmedCount = 0;
        const onConfirmed = () => {
            confirmedCount += 1;
        };

        const customTitle = 'my test title';
        store.dispatch(confirmModal(onConfirmed, customTitle));
        expect(getByRole('button', {name: /Confirm/i})).toBeInTheDocument();
        expect(getByRole('button', {name: /Cancel/i})).toBeInTheDocument();
        expect(getByText(customTitle)).toBeInTheDocument();

        store.dispatch(closeReactModal());
        expect(queryByRole(container, 'button', {name: /Confirm/i})).toBeNull();

        // we need delay because of modal animation
        await new Promise((r) => setTimeout(r, 300));

        store.dispatch(confirmModal(onConfirmed));
        const cancelBtn = getByRole('button', {name: /Cancel/i});
        expect(cancelBtn).toBeInTheDocument();
        fireEvent.click(cancelBtn);
        expect(queryByRole(container, 'button', {name: /Cancel/i})).toBeNull();

        // we need delay because of modal animation
        await new Promise((r) => setTimeout(r, 300));

        store.dispatch(confirmModal(onConfirmed));
        const confirmBtn = getByRole('button', {name: /Confirm/i});
        expect(confirmBtn).toBeInTheDocument();

        fireEvent.click(confirmBtn);
        expect(queryByRole(container, 'button', {name: /Confirm/i})).toBeNull();
        expect(confirmedCount).toBe(1);
    });
});
