import React from 'react';
import ReactChart from 'react-apexcharts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

import './index.css';

const Chart = ({ totalState }) => {
  const countryData = totalState.data.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }

    return 0;
  });
  const categories = countryData.map((day) => moment(day.createdAt).add(3, 'hours').format('DD/MM/YYYY'));
  const infecteds = countryData.map((day) => day.totalInfecteds);
  const survivors = countryData.map((day) => day.totalSurvivors);
  const deaths = countryData.map((day) => day.totalDeaths);
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
      categories,
    },
  };

  const series = [
    {
      name: 'Confirmados',
      data: infecteds,
    },
    {
      name: 'Recuperados',
      data: survivors,
    },
    {
      name: 'Mortos',
      data: deaths,
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

Chart.propTypes = {
  totalState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  totalState: state.totalReducer,
});

export default connect(mapStateToProps)(Chart);
