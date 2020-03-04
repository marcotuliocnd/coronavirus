import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadTotal from '../../actions/Total';
import { setColor } from '../../actions/Countries';

import './index.css';

const ListInfecteds = ({ countryState, loadTotal, setColor }) => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

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
  countryState.data.forEach((country, index) => {
    countryListElement.push(
      <li onClick={() => handleClick(country, index)} key={country.country} style={{ backgroundColor: country.color ? country.color : index % 2 === 0 ? '#ede9e0' : '#fff' }}>
        <span className="text-danger">{formatNumber(country.totalInfecteds)}</span>
        {' '}
        -
        {' '}
        {country.country}
      </li>,
    );
  });

  return (
    <>
      <div className="list-infecteds sombra">
        <div className="list-infecteds--Inner">
          <h2 className="box-title">Total de casos confirmados por país</h2>
          <ul>
            { countryListElement }
          </ul>
        </div>
      </div>
    </>
  );
};

ListInfecteds.propTypes = {
  countryState: PropTypes.object.isRequired,
  loadTotal: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  countryState: state.countriesReducer,
});

export default connect(mapStateToProps, { loadTotal, setColor })(ListInfecteds);
