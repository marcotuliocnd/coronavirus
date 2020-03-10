import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';

const Anuncio = ({ statusState }) => (
  <div className="ad">
    <div className="ad--Inner sombra">
      <img
        src={statusState.data.announcementRectangle}
        alt="Anuncio"
      />
    </div>
  </div>
);

Anuncio.propTypes = {
  statusState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  statusState: state.statusReducer,
});

export default connect(mapStateToProps)(Anuncio);
