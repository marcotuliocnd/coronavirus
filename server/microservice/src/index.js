const wikipediaService = require('./services/wikipedia');
const APIService = require('./services/sendToAPI');
const cron = require('node-cron');

cron.schedule('*/5 * * * *', async () => {
  console.log('Started to fetch data');
  const allCountriesData = await wikipediaService.getParsedData();
  APIService.postCountriesDataToAPI(allCountriesData);
  console.log('Finished fetching data');
});