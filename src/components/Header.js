import React from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';

// css
import HeaderCont from '../css/Header';

function Header(){
    function handleInput(e){
        console.log('Tecla Presionada');
    }
    return(
        <HeaderCont>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">DanielMateus|<small>Dev</small> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Favoritas</Nav.Link>
                    </Nav>
                    <Form className="col-6" inline>
                        <FormControl onInput={handleInput} type="text" placeholder="Search" className="mr-sm-2 w-100" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </HeaderCont>
    )
}

export default Header;