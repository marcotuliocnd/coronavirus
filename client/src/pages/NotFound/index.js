import React from 'react';
import { Link } from 'react-router-dom';

import Doctor from '../../assets/images/medicine.svg';

import './index.css';

const NotFound = () => (
  <div className="pageNotFound">
    <img
      src={Doctor}
      alt="Page not found"
      className="pageNotFoundImage"
    />
    <div className="pageNotFoundText">
      <h2 className="error-text">404</h2>
      <h2>Parece que você se perdeu...</h2>
      <p className="error-description">A página que você está procurando não existe, ou foi movida de lugar</p>
      <Link className="go-home sombra" to="/">Voltar para home</Link>
    </div>
  </div>
);

export default NotFound;
