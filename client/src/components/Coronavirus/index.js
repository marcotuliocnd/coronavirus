import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';

const Coronavirus = ({ status }) => (
  <div className="Coronavirus sombra">
    <div className="Coronavirus--inner">
        <h2 className="box-title articles-title">{ status.data.coronaTitle }</h2>
        <p>
          { status.data.coronaText }
        </p>
    </div>
  </div>
);

Coronavirus.propTypes = {
  status: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.statusReducer,
});

export default connect(mapStateToProps)(Coronavirus);
