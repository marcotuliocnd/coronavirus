const wikipediaService = require('./services/wikipedia');
const APIService = require('./services/sendToAPI');

const cron = async () => {
  const allCountriesData = await wikipediaService.getParsedData();
  APIService.postCountriesDataToAPI(allCountriesData);
};

cron();
