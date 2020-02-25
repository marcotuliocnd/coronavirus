const mongoose = require('mongoose');

const InfectedModel = mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('infecteds', InfectedModel);
