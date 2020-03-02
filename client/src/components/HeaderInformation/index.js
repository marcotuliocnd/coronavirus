import React from 'react';
import './index.css';

import Logo from '../../assets/images/temp-logo.webp';

const HeaderInformation = () => (
  <div className="header">
    <div className="header--Inner">
      <img src={Logo} alt="logomarca" />
      <div className="header--Textbox">
        <h1>Coronavírus - COVID-19 - ESTATÍSTICAS GLOBAIS</h1>
        <p>
          Aviso legal. Os dados apresentados nesse site são meramente informativos,
          e não devem ser utilizados para nenhuma orientação médica ou comércio.
        </p>
        <a href="#!">Leia os termos de uso.</a>
      </div>
    </div>
  </div>
);

export default HeaderInformation;
