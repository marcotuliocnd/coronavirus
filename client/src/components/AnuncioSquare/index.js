import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';

const AnuncioSquare = ({ statusState }) => (
  <div className="ad-square">
    <div className="ad-square--Inner">
      <img src={statusState.data.announcementSquare} alt="Anuncio" />
    </div>
  </div>
);

AnuncioSquare.propTypes = {
  statusState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  statusState: state.statusReducer,
});

export default connect(mapStateToProps)(AnuncioSquare);
