import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom' // хук, с помощью которого можно динамически передвигаться по страницам

const NavBar = observer( () => {
    const {user} = useContext(Context)
    let navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Название магазина</NavLink>
          {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}} >
                    <Stack direction="horizontal" gap={2}>
                    <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                    </Stack>

                </Nav>
                        :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Container>
      </Navbar>
    );
});

export default NavBar;