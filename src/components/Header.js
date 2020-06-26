import React from 'react';
import {Navbar, Nav, FormControl} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// css
import HeaderCont from '../css/Header';

function Header(){
    const dispatch = useDispatch();
    
    function handleInput(e){
        const Buscador = document.getElementById('Buscador');
        console.log(Buscador.value);
        if(Buscador.value.length > 2){
            dispatch({
                type: 'SET_SEARCH_TERM',
                payload: Buscador.value
            });
            fetch(`https://api.jikan.moe/v3/search/anime?q=${Buscador.value}`)
            .then(
                result => {
                    return result.json()
                }
            )
            .then(
                data => {
                    const animes = data.results;
                    dispatch({
                        type: 'SET_ANIME_LIST',
                        payload: animes
                    });
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
        }
    }
    
    return(
        <HeaderCont>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">DanielMateus|<small>Dev</small> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                    </Nav>
                    <FormControl id="Buscador" onInput={handleInput} type="text" placeholder="Search" className="mr-sm-2 w-50" />
                </Navbar.Collapse>
            </Navbar>
        </HeaderCont>
    )
}

export default Header;