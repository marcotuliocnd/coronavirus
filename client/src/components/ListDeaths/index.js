import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadTotal from '../../actions/Total';
import { setColor } from '../../actions/Countries';

import './index.css';

const ListDeaths = ({ countryState, loadTotal, setColor }) => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const countryData = countryState.data.filter((country) => country.totalDeaths > 0);
  countryData.sort((a, b) => {
    if (a.totalDeaths < b.totalDeaths) {
      return 1;
    }
    if (a.totalDeaths > b.totalDeaths) {
      return -1;
    }

    return 0;
  });

  const handleClick = (country, index) => {
    if (country.color) {
      loadTotal(undefined);
      setColor(undefined);
    } else {
      loadTotal(country.country);
      setColor(country.country);
    }
  };

  const countryListElement = [];
  countryData.forEach((country, index) => {
    countryListElement.push(
      <li onClick={() => handleClick(country, index)} key={country.country} style={{ backgroundColor: country.color ? country.color : index % 2 === 0 ? '#ede9e0' : '#fff' }}>
        <span className="text-danger">{formatNumber(country.totalDeaths)}</span>
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
          <h2 className="box-title">Total de mortes confirmadas por país</h2>
          <ul>
            { countryListElement }
          </ul>
        </div>
      </div>
    </>
  );
};

ListDeaths.propTypes = {
  countryState: PropTypes.object.isRequired,
  loadTotal: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
});

export default connect(mapStateToProps, { setColor, loadTotal })(ListDeaths);
