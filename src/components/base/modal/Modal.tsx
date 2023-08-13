import React from 'react';
import {createPortal} from "react-dom";
import styles from './styles.module.scss'
import Icon from "../../icon/Icon";
interface Props {
    children: React.ReactElement | React.ReactElement[]
    isOpen: boolean
    onClose: () => void
}
const Modal = ({children, isOpen, onClose}:Props) => {

    return createPortal(
        <>
            {isOpen && <div className={styles.Container}>
                <div className={styles.Background} onClick={onClose} />
                <div className={styles.Content}>
                    <Icon className={styles.Close} onClick={onClose} variant={'close'} modifier={"size10"} />
                    {children}
                </div>
            </div>}
        </>
        ,
        document.body,
    );
};

export default Modal;
