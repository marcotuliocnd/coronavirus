import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/temp-logo.webp';

const HeaderInformation = () => (
  <div className="header">
    <div className="header--Inner">
      <Link to="/">
        <img src={Logo} alt="logomarca" />
      </Link>
      <div className="header--Textbox">
        <h1>Coronavírus - COVID-19 - ESTATÍSTICAS GLOBAIS (Último surto)</h1>
        <p>
          Aviso legal. Os dados apresentados nesse site são meramente informativos,
          e não devem ser utilizados para nenhuma orientação médica ou comércio.
        </p>
        <Link to="/termos">Leia os termos de uso.</Link>
      </div>
    </div>
  </div>
);

export default HeaderInformation;
