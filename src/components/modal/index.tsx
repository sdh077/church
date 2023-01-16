import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.css'
interface props {
    button: JSX.Element
    content: JSX.Element
    title: string
}
const IModal = ({ button, title, content }: props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                {button}
            </div>

            <Modal show={show} onHide={handleClose} fullscreen={true} bsPrefix='modal modal-tran'>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                    <span className='close-btn' onClick={() => handleClose()}>
                        <i className='bx bx-x i-size'></i>
                    </span>
                </Modal.Header>
                <Modal.Body bsPrefix='modal-body m-auto'>{content}</Modal.Body>
            </Modal>
        </>
    );
}

export default IModal;