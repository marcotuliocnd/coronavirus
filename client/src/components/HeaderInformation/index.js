import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo.png';

const HeaderInformation = ({ statusState }) => (
  <div className="header">
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/"><img className="logo" src={Logo} alt="logomarca" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="header--Textbox">
            <h1>{ statusState.data.title }</h1>
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

HeaderInformation.propTypes = {
  statusState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  statusState: state.statusReducer,
});

export default connect(mapStateToProps)(HeaderInformation);
