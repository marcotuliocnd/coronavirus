import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import './index.css';

const TotalSurvivors = ({ totalState }) => {
  const survivors = totalState.data[0].totalSurvivors;
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).format('DD [de] MMMM [às] hh:mm');
  }

  return (
    <div className="total-survivors sombra">
      <div className="total-survivors--Inner">
        <h2 className="box-title">Total de pessoas recuperadas</h2>
        <h2 className="text-success">{ formatNumber(survivors) }</h2>
        <h3>
          Ultima atualização em:
          <br />
          <span>{ formatDate(totalState.data[0].updatedAt) }</span>
        </h3>
      </div>
    </div>
  );
};

TotalSurvivors.propTypes = {
  totalState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  totalState: state.totalReducer,
});

export default connect(mapStateToProps)(TotalSurvivors);
