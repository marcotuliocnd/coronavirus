import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import './index.css';

const TotalDeaths = ({ totalState }) => {
  const deaths = totalState.data[0].totalDeaths;

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).format('DD [de] MMMM [às] HH:mm');
  }

  return (
    <div className="total-deaths sombra-projetada">
      <div className="total-deaths--Inner">
        <h2 className="box-title">Total de mortes confirmadas</h2>
        <h2 className="text-danger">{ formatNumber(deaths) }</h2>
        <h3>
          Ultima atualização em:
          <br />
          <span>{ formatDate(totalState.data[0].updatedAt) }</span>
        </h3>
      </div>
    </div>
  );
};

TotalDeaths.propTypes = {
  totalState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  totalState: state.totalReducer,
});

export default connect(mapStateToProps)(TotalDeaths);
