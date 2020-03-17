const { startOfDay, endOfDay } = require('date-fns');

const TotalModel = require('../models/Total');

const list = async (req, res) => {
  try {
    const data = await TotalModel
      .find({})
      .sort({ createdAt: -1 });

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
    const {
      totalDeaths, totalInfecteds, totalSurvivors,
    } = req.body;
    const today = new Date();
    const data = await TotalModel
      .findOneAndUpdate(
        { updatedAt: { $gte: startOfDay(today), $lt: endOfDay(today) } },
        {
          totalDeaths, totalInfecteds, totalSurvivors,
        },
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
