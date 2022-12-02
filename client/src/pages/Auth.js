import React, { useState } from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userApi';

const Auth = () => {
    const location = useLocation();//с помощью него можно получить маршрут из строки запроса
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        } 
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Button className="mt-3" variant="secondary" onClick={click}>
                        {isLogin ? "Войти" : "Зарегистрироваться"}
                    </Button>
                    {isLogin ?
                        <div className="mt-1">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Необходимо зарегистрироваться</NavLink></div>
                             :
                        <div className="mt-1">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>
                }
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;