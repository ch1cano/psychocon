import React from 'react';
import style from './Modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <div onClick={onClose} className={style.clBtnMy}></div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
