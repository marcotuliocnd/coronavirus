const mongoose = require('mongoose');

const StatusModel = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    maintenance: {
      type: Boolean,
    },
    announcementRectangle: {
      type: String,
    },
    announcementSquare: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('status', StatusModel);
