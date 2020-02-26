const wikipediaService = require('./services/wikipedia');


const cron = async () => {
  const allCountriesData = await wikipediaService.getParsedData();
  console.log(allCountriesData);
};

cron();
