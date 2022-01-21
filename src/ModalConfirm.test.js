import React from "react";
import { render, screen } from "@testing-library/react";
import ModalConfirm from "./ModalConfirm";

describe('ModalConfirm', () => {
    it ('renders modal confirm window', () => {
        render(<ModalConfirm onConfirm={() => {}} removeModal={() => {}} />);
        screen.debug();
        // expect(screen.getByText('Confirm')).toBeInTheDocument();
    })
});