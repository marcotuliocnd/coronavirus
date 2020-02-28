const cron = require('node-cron');
require('dotenv').config();

const Wikipedia = require('./services/Wikipedia');
const Api = require('./services/Api');

cron.schedule('*/5 * * * *', async () => {
  console.log('Started to fetch data');
  const allCountriesData = await Wikipedia.getParsedData();
  Api.postCountriesDataToAPI(allCountriesData);
  console.log('Finished fetching data');
});
