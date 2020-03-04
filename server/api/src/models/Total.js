const mongoose = require('mongoose');

const TotalModel = mongoose.Schema(
  {
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

module.exports = mongoose.model('totals', TotalModel);
