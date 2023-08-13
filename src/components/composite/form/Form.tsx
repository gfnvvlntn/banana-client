import React, {useState} from 'react';
import Modal from "../../base/modal/Modal";
import Input from "../../base/input/Input";
import Button from "../../base/button/Button";
import Typography from "../../base/typography/Typography";
import styles from './styles.module.scss'
interface Props {
    isOpen: boolean
    onClose: () => void
    onSubmit: (email: string, password: string) => void
    action: string
}

const Form = ({isOpen, action, onClose, onSubmit}:Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onHandleSubmit = () => {
        onSubmit(email, password)
        setPassword('')
        setEmail('')
    }
    const onHandleClose = () => {
        onClose()
        setPassword('')
        setEmail('')
    }
    return (
        <Modal isOpen={isOpen} onClose={onHandleClose}>
            <div className={styles.Container}>
                <Typography modifier={['H2', 'center']}>{action}</Typography>
                <div className={styles.InputContainer}>
                    <Input value={email} onChange={onChangeEmail} placeholder={'Ваш e-mail'} />
                    <Input value={password} onChange={onChangePassword} placeholder={'Ваш пароль'} />
                </div>
                <Button onClick={onHandleSubmit} modifier={'yellow'}>{action}</Button>
            </div>
        </Modal>

    );
};

export default Form;
