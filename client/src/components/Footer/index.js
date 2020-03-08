import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Footer = () => (
  <div className="footer">
    <div className="footer--Inner">
      <h2>
        TODOS OS DIREITOS RESERVADOS - 2020
      </h2>
      <Link className="politics" to="#!">
        POLÍTICA DE PRIVACIDADE
      </Link>
    </div>
  </div>
);

export default Footer;
