const StatusModel = require('../models/Status');
const { validationResult } = require('express-validator');

const list = async (req, res) => {
  try {
    const data = await StatusModel
      .findOne({})
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json(data || { offline: true });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const store = async (req, res) => {
  try {
    const { body } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ success:false, data: errors.array() });
    }
    const data = await StatusModel.create(body);

    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

module.exports = {
  list,
  store,
};
