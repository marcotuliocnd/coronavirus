const CoordinatesModel = require('../models/Coordinates');


const formatToCoordinatesJson = (countries) => {
  const countryCoordinates = [];
  for (const country of countries) {
    const name = country.country;
    const latlng = [ country.lat, country.lng ] ;
    countryCoordinates.push({ name, latlng });
  }
  return countryCoordinates;
};

const list = async (req, res) => {
  try {
    const data = await CoordinatesModel.find({});
    const coordinates = formatToCoordinatesJson(data);
    return res
      .status(200)
      .json(coordinates || {});
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

    const data = await CoordinatesModel.create(body);
    console.log(data);
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

const update = async (req, res) => {
  try {
    const { country } = req.body;

    const data = await CoordinatesModel.updateOne({ country }, req.body);
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
  update
};
