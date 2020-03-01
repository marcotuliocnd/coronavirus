import React from 'react';
import ReactChart from 'react-apexcharts';

import './index.css';

const Chart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: 'Confirmados',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: 'Recuperados',
      data: [14, 23, 15, 30, 43, 45, 56, 90],
    },
    {
      name: 'Mortos',
      data: [1, 2, 2, 2, 3, 4, 5, 6],
    },
  ];

  return (
    <div className="chart sombra">
      <div className="chart--Inner">
        <ReactChart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
};
export default Chart;
