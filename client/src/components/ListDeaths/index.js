import React from 'react';

import './index.css';

const ListDeaths = () => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const countryData = [
    { country: 'China', total: 1 },
    { country: 'Coreia do Sul', total: 1 },
    { country: 'Japão', total: 1 },
    { country: 'Égito', total: 1 },
    { country: 'Alemanha', total: 1 },
    { country: 'Brasil', total: 1 },
    { country: 'Estados Unidos', total: 1 },
    { country: 'Chile', total: 1 },
    { country: 'Venezuela', total: 1 },
    { country: 'México', total: 1 },
    { country: 'Transporte internacional', total: 1 },
    { country: 'Coreia do Norte', total: 1 },
  ];

  const countryListElement = [];
  countryData.forEach((country) => {
    countryListElement.push(
      <li key={country.country}>
        <span className="text-danger">{formatNumber(country.total)}</span>
        {' '}
        -
        {' '}
        {country.country}
      </li>,
    );
  });

  return (
    <>
      <div className="list-deaths sombra">
        <div className="list-deaths--Inner">
          <h1 className="box-title">Total de mortes confirmadas por país</h1>
          <ul>
            { countryListElement }
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListDeaths;
