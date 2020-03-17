const { startOfDay, endOfDay } = require('date-fns');

const CountryModel = require('../models/Country');

const checkIfValuesAreValid = (country) => {
  if (country.totalDeaths >= 0 && country.totalInfecteds >= 0 && country.totalSurvivors >= 0) {
    return true;
  }
  return false;
};

const list = async (req, res) => {
  const { country } = req.query;
  const today = new Date();
  let query = {};
  if (country) {
    query = { country };
  } else {
    query = {
      updatedAt: { $gte: startOfDay(today), $lt: endOfDay(today) },
    };
  }
  try {
    const data = await CountryModel
      .find(query)
      .sort({ totalInfecteds: -1 });

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
      country, totalDeaths, totalInfecteds, totalSurvivors,
    } = req.body;
    if (!checkIfValuesAreValid(req.body)) {
      return res
        .status(406)
        .json({ success: false, data: 'Requisição está faltando informações' });
    }
    const today = new Date();
    const data = await CountryModel
      .findOneAndUpdate(
        { country, updatedAt: { $gte: startOfDay(today), $lt: endOfDay(today) } },
        {
          country, totalDeaths, totalInfecteds, totalSurvivors,
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
