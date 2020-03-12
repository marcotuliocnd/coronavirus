import React from 'react';

import Maintenace from '../../assets/images/maintenance.svg';

import './index.css';

const Maintenance = () => (
  <div className="pageMaintenance">
    <img
      src={Maintenace}
      alt="Page not found"
      className="pageMaintenanceImage"
    />
    <div className="pageMaintenanceText">
      <h2 className="maintenance-text">Manutenção</h2>
      <h2>O site que você está procurando ainda não está pronto...</h2>
      <p className="error-description">Salve nos seus favoritos para voltar em outro momento!</p>
    </div>
  </div>
);

export default Maintenance;
