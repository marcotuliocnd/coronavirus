import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const AnuncioSquare = ({ statusState }) => (
  <div className="ad-square">
    <div className="ad-square--Inner">
      {ReactHtmlParser(statusState.data.announcementSquare)}
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
