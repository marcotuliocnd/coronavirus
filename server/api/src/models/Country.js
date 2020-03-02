const mongoose = require('mongoose');

const CountryModel = mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
      required: true,
    },
    totalInfecteds: {
      type: Number,
    },
    totalDeaths: {
      type: Number,
    },
    totalSurvivors: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('countries', CountryModel);
