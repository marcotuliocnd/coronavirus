import React from 'react';
import './index.css';

const TotalInfecteds = () => {
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
  ];

  let totalInfecteds = 0;
  countryData.forEach((country) => {
    totalInfecteds += country.total;
  });

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="total-infecteds sombra-projetada">
      <div className="total-infecteds--Inner">
        <h1 className="box-title">Total de casos confirmados</h1>
        <h1 className="text-danger">{ formatNumber(totalInfecteds) }</h1>
        <h2>
          Ultima atualização em:
          <br />
          <span>20 de Janeiro de 2020 as 19:00</span>
        </h2>
      </div>
    </div>
  );
};

export default TotalInfecteds;
