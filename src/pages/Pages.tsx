import React from 'react';
import Header from "../components/composite/header/Header";
import {Route, Routes, Outlet,} from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import styles from './styles.module.scss'
import {Toaster} from "react-hot-toast";
import useLocalStorage from "../hooks/use-localStorage";

const Pages = () => {
    const [isAuth, setIsAuth] = useLocalStorage('isAuth');
    const [authToken, setAuthToken] = useLocalStorage('authToken');

    console.log(authToken)

    const setAuthData = (isAuth: boolean, accessToken: string):void => {
        setAuthToken(accessToken);
        setIsAuth(isAuth);
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <Toaster />
                <Header isAuth={isAuth} setAuthData={setAuthData}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuth ? (
                                <Outlet />
                            ) : (
                                <Home />
                            )
                        }
                    />
                    <Route path="/blog" element={<Blog />}/>
                </Routes>
            </div>
        </div>
    );
};

export default Pages;
