import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';


import './index.css';

const TotalInfecteds = ({ totalState }) => {
  const infecteds = totalState.data[0].totalInfecteds;

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).format('DD [de] MMMM [às] hh:mm');
  }

  return (
    <div className="total-infecteds sombra-projetada">
      <div className="total-infecteds--Inner">
        <h2 className="box-title">Total de casos confirmados</h2>
        <h2 className="text-danger">{ formatNumber(infecteds) }</h2>
        <h3>
          Ultima atualização em:
          <br />
          <span>{ formatDate(totalState.data[0].updatedAt) }</span>
        </h3>
      </div>
    </div>
  );
};

TotalInfecteds.propTypes = {
  totalState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  totalState: state.totalReducer,
});

export default connect(mapStateToProps)(TotalInfecteds);
