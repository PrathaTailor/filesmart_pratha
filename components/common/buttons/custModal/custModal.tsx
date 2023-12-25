import React, { Dispatch, SetStateAction, ReactNode } from 'react';
import Modal from 'react-modal';

interface CustModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    bodyData: any;
}

const CustModal = ({ open, bodyData, setOpen }: CustModalProps) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const closeModal = () => setOpen(false);

    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            appElement={document.getElementById('root') as HTMLElement}
            contentLabel="Modal"
        >
            {bodyData}
        </Modal>
    );
};

export default CustModal;
