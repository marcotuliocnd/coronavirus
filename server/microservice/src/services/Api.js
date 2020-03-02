const axios = require('axios');

const api = axios.create({
  baseURL: process.env.APIURL,
  headers: {
    authorization: process.env.TOKEN,
  },
});

const postCountriesDataToAPI = async (countriesData) => {
  let index = 0;
  for (const country of countriesData) {
    index += 1;
    console.log(`POSTING ${index}/${countriesData.length} COUNTRIES`);
    try {
      console.log(country)
      await api.post('/countries', country);
      console.log('SUCCESS');
    } catch (err) {
      console.log('ERROR');
      console.error(err.message);
    }
  }
};

module.exports = { postCountriesDataToAPI };
