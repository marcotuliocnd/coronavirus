import React from 'react';
import './index.css';

const TotalDeaths = () => {
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
    { country: 'Argentina', total: 1 },
    { country: 'Paquistão', total: 1 },
  ];

  let totalDeaths = 0;
  countryData.forEach((country) => {
    totalDeaths += country.total;
  });

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="total-deaths sombra-projetada">
      <div className="total-deaths--Inner">
        <h1 className="box-title">Total de mortes confirmadas</h1>
        <h1 className="text-danger">{ formatNumber(totalDeaths) }</h1>
        <h2>
          Ultima atualização em:
          <br />
          <span>20 de Janeiro de 2020 as 19:00</span>
        </h2>
      </div>
    </div>
  );
};

export default TotalDeaths;
