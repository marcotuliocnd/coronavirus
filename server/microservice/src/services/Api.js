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
      await api.post('/infecteds', country[0]);
      await api.post('/deaths', country[1]);
      await api.post('/survivors', country[2]);
      console.log('SUCCESS');
    } catch (err) {
      console.log('ERROR');
      console.error(err.message);
    }
  }
};

module.exports = { postCountriesDataToAPI };
