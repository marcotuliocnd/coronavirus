const InfectedModel = require('../models/Infecteds');

const list = async (req, res) => {
  const { country } = req.query;
  const query = {};
  if (country) {
    query.country = country;
  }
  try {
    const data = await InfectedModel
      .find(query)
      .sort({ total: -1 });

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
};
