import React from 'react';
import './index.css';

const Mapa = () => (
  <>
    <div className="map sombra">
      <div className="map--Inner">
        <iframe title="mapa" height="100%" width="100%" src="https://getuliobr.github.io/corona?country" />
      </div>
    </div>
  </>
);

export default Mapa;
