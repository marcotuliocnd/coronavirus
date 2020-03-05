import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadTotal from '../../actions/Total';
import { setColor } from '../../actions/Countries';

import './index.css';

const ListSurvivors = ({ countryState, loadTotal, setColor }) => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const countryData = countryState.data.filter((country) => country.totalSurvivors > 0);

  countryData.sort((a, b) => {
    if (a.totalSurvivors < b.totalSurvivors) {
      return 1;
    }
    if (a.totalSurvivors > b.totalSurvivors) {
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
        <span className="text-success">{formatNumber(country.totalSurvivors)}</span>
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
          <h2 className="box-title">Total de recuperados por país</h2>
          <ul>
            { countryListElement }
          </ul>
        </div>
      </div>
    </>
  );
};

ListSurvivors.propTypes = {
  countryState: PropTypes.object.isRequired,
  loadTotal: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
});

export default connect(mapStateToProps, { loadTotal, setColor })(ListSurvivors);
