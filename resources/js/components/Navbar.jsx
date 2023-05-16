
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Container, } from 'react-bootstrap'
import logo from '../../css/logonavbar.png';

function Navb() {

    const navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        navigate('/');
    }

    const Opciones = () => {
        //console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') && localStorage.getItem('correo') == "admin@proautosxpress.com") {
            return (
                <>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/Vprod">Ver productos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/Rprod">Agregar producto</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/Dprod">Descartar producto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/BProv">Ver provedores</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/RProv">Agregar provedores</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/DProv">Descartar provedores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/BEmplo">Ver Empleados</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/REmplo">Agregar Empleado</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/DEmplo">Eliminar Empleado</NavDropdown.Item>
                </>

            );
        }
        else { 
            if(localStorage.getItem('token'))
            return (
                <>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/Vprod">Ver productos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/Btienda">Ver Sucursales</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/proautosxpress/public/BProv">Ver provedores</NavDropdown.Item>
                </>
            )

        }
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/proautosxpress/public/">
                    
                </Navbar.Brand>
                <Navbar.Brand href="/proautosxpress/public/"> <img
                        src={logo} height={'90px'}
                    /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/proautosxpress/public/login">Login</Nav.Link>                        
                        <NavDropdown title="Accion" id="collasible-nav-dropdown">
                        <Opciones/>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={logOut} eventKey={2} href="/proautosxpress/public/login">
                            Cerrar sesion
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navb;

