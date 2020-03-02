import React from 'react';
import './index.css';

const TotalSurvivors = () => {
  const countryData = [
    { country: 'China', total: 4 },
    { country: 'Coreia do Sul', total: 4 },
    { country: 'Japão', total: 4 },
    { country: 'Égito', total: 4 },
    { country: 'Alemanha', total: 4 },
    { country: 'Brasil', total: 4 },
    { country: 'Estados Unidos', total: 4 },
    { country: 'Chile', total: 4 },
    { country: 'Venezuela', total: 4 },
    { country: 'México', total: 4 },
    { country: 'Transporte internacional', total: 4 },
    { country: 'Coreia do Norte', total: 4 },
    { country: 'Argentina', total: 4 },
    { country: 'Paquistão', total: 4 },
  ];

  let totalSurvivors = 0;
  countryData.forEach((country) => {
    totalSurvivors += country.total;
  });

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="total-survivors sombra">
      <div className="total-survivors--Inner">
        <h1 className="box-title">Total de pessoas recuperadas</h1>
        <h1 className="text-success">{ formatNumber(totalSurvivors) }</h1>
        <h2>
          Ultima atualização em:
          <br />
          <span>20 de Janeiro de 2020 as 19:00</span>
        </h2>
      </div>
    </div>
  );
};

export default TotalSurvivors;
