import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alertState }) => (alertState.id ? (
  <div key={alertState.id} className={`alert alert-${alertState.alertType}`}>
    { alertState.message }
  </div>
) : null);


Alert.propTypes = {
  alertState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alertState: state.alertReducer,
});

export default connect(mapStateToProps)(Alert);
