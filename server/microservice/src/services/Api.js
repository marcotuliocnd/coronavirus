const axios = require('axios');

const api = axios.create({
  baseURL: process.env.APIURL,
  headers: {
    authorization: process.env.TOKEN,
  },
});

const postCountriesDataToAPI = async (countriesData) => {
  let index = 0;

  const total = {
    totalInfecteds:0,
    totalSurvivors:0,
    totalDeaths:0
  };

  for (const country of countriesData) {
    index += 1;
    console.log(`POSTING ${index}/${countriesData.length} COUNTRIES`);
    try {
      total.totalDeaths += country.totalDeaths;
      total.totalInfecteds += country.totalInfecteds;
      total.totalSurvivors += country.totalSurvivors;

      await api.post('/countries', country);
      console.log('SUCCESS POSTING TO API /countries');
    } catch (err) {
      console.log('ERROR WHEN POSTING TO API /countries')
      console.error(err.message);
    }
  }

  try {
    await api.post('/totals',total)
    console.log('SUCCESS POSTING TO API /totals');
  } catch (err) {
    console.log('ERROR WHEN POSTING TO API /total')
    console.error(err.message)
  }
};

module.exports = { postCountriesDataToAPI };
