import React from 'react';

import './index.css';

const ListSurvivors = () => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const countryData = [
    { country: 'China', total: 70000 },
    { country: 'Coreia do Sul', total: 70000 },
    { country: 'Japão', total: 70000 },
    { country: 'Égito', total: 70000 },
    { country: 'Alemanha', total: 70000 },
    { country: 'Brasil', total: 70000 },
    { country: 'Estados Unidos', total: 70000 },
    { country: 'Chile', total: 70000 },
    { country: 'Venezuela', total: 70000 },
    { country: 'México', total: 70000 },
    { country: 'Transporte internacional', total: 70000 },
    { country: 'Coreia do Norte', total: 70000 },
    { country: 'Argentina', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
    { country: 'Paquistão', total: 70000 },
  ];

  const countryListElement = [];
  countryData.forEach((country) => {
    countryListElement.push(
      <li key={country.country}>
        <span className="text-success">{formatNumber(country.total)}</span>
        {' '}
        -
        {' '}
        {country.country}
      </li>,
    );
  });

  return (
    <>
      <div className="list-survivors sombra">
        <div className="list-survivors--Inner">
          <h1 className="box-title">Total de recuperados por país</h1>
          <ul>
            { countryListElement }
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListSurvivors;
