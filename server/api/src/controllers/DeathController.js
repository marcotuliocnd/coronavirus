const { startOfDay, endOfDay } = require('date-fns');

const DeathModel = require('../models/Deaths');

const list = async (req, res) => {
  const { country } = req.query;
  const today = new Date();
  const query = {
    total: { $ne: 0 },
    updatedAt: { $gte: startOfDay(today), $lt: endOfDay(today) },
  };
  if (country) {
    query.country = country;
  }
  try {
    const data = await DeathModel
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

const store = async (req, res) => {
  try {
    const { country, total } = req.body;
    const today = new Date();
    const data = await DeathModel
      .findOneAndUpdate(
        { country, updatedAt: { $gte: startOfDay(today), $lt: endOfDay(today) } },
        { country, total },
        { upsert: true, new: true },
      );

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
