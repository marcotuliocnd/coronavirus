const mongoose = require('mongoose');

const CoordinatesModel = mongoose.Schema(
  {
    country: {
      type: String
    },
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  }
);

module.exports = mongoose.model('coordinates', CoordinatesModel);
