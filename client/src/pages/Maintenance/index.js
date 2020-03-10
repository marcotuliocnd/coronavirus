import React from 'react';
import { Link } from 'react-router-dom';

import Maintenace from '../../assets/images/maintenance.svg';

import './index.css';

const Maintenance = () => (
  <div className="pageNotFound">
    <img
      src={Maintenace}
      alt="Page not found"
      className="pageNotFoundImage"
    />
    <div className="pageNotFoundText">
      <h2 className="error-text">Manutenção</h2>
      <h2>O site que você está procurando ainda não está pronto...</h2>
      <p className="error-description">Salve nos seus favoritos para voltar em outro momento!</p>
    </div>
  </div>
);

export default Maintenance;
