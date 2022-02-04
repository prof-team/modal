import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import ModalConfirm from '../ModalConfirm';

afterEach(cleanup);

it('renders confirm modal', () => {
    let confirmedCount = 0;
    const onConfirm = () => {
        confirmedCount += 1;
    };

    let canceledCount = 0;
    const onCancel = () => {
        canceledCount += 1;
    };

    const {getByRole} = render(<ModalConfirm onConfirm={onConfirm} removeModal={onCancel} />);
    const confirmBtn = getByRole('button', {name: /Confirm/i});
    const cancelBtn = getByRole('button', {name: /Cancel/i});
    expect(confirmBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();

    fireEvent.click(confirmBtn);
    expect(confirmedCount).toEqual(1);
    expect(canceledCount).toEqual(1);

    fireEvent.click(confirmBtn);
    expect(confirmedCount).toEqual(2);
    expect(canceledCount).toEqual(2);

    fireEvent.click(cancelBtn);
    expect(confirmedCount).toEqual(2);
    expect(canceledCount).toEqual(3);
});
