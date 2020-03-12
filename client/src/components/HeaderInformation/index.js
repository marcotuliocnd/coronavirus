import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Logo from '../../assets/images/logo.png';

const HeaderInformation = () => (
  <div className="header">
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/"><img className="logo" src={Logo} alt="logomarca" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="header--Textbox">
            <h1>Coronavírus - COVID-19 - ESTATÍSTICAS GLOBAIS (Último surto)</h1>
            <p>
              Aviso legal. Os dados apresentados neste website são meramente informativos,
              e não devem ser utilizados para nenhuma orientação médica ou comércio.
            </p>
            <Link to="/termos">Leia os termos de uso.</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default HeaderInformation;
