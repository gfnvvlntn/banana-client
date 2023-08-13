import React, {useState} from 'react';
import styles from './styles.module.scss'
import Icon from "../../base/icon/Icon";
import Button from "../../base/button/Button";
import AuthService from "../../../sevices/authService";
import Form from "../form/Form";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import {IUser} from "../../../interface/user";
interface Props {
    isAuth: boolean
    setAuthData: (isAuth: boolean, accessToken: string, user: IUser) => void
}


const Header = ({isAuth, setAuthData}:Props) => {
    const navigate = useNavigate()
    const [isShowRegistrationModal, setIsShowRegistrationModal] = useState(false)
    const [isShowLoginModal, setIsShowLoginModal] = useState(false)
    const onRegistration = async (email: string, password: string) => {
        try {
            const response = await AuthService.registration(email, password);
            if (response.data.error) {
                toast.error(response.data.message)
                return;
            }
            setAuthData(true, response.data.accessToken, response.data.user)
            navigate('blog')
            setIsShowRegistrationModal(false)
        } catch (e) {
            console.log(e)
        }
    }

    const onLogout = async () => {
        try {
            const response = await AuthService.logout();
            if (response.data.error) {
                toast.error(response.data.message)
                return;
            }
            setAuthData(false, '', {} as IUser)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    const onLogin = async (email: string, password: string) => {
        try {
            const response = await AuthService.login(email, password);
            if (response.data.error) {
                toast.error(response.data.message)
                return;
            }
            setAuthData(true, response.data.accessToken, response.data.user)
            navigate('blog')
            setIsShowLoginModal(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.Container}>
            <Form onSubmit={onRegistration}  isOpen={isShowRegistrationModal} onClose={() => setIsShowRegistrationModal(false)} action={'Регистрация'}/>
            <Form onSubmit={onLogin} isOpen={isShowLoginModal} onClose={() => setIsShowLoginModal(false)} action={'Войти'}/>
            <Icon variant={'logo'} modifier={"size44"}/>
            <div className={styles.ActionContainer}>
                {
                    isAuth ? (
                        <Button onClick={onLogout}>Выйти</Button>

                    )
                        : (
                            <>
                                <Button onClick={() => setIsShowRegistrationModal(true)} modifier={'yellow'}>Зарегистрироваться</Button>
                                <Button onClick={() => setIsShowLoginModal(true)}>Войти</Button>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default Header;
