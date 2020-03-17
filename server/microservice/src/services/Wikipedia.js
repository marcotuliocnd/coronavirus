const scraper = require('table-scraper');

const structure = (country, total) => ({ country, total });

const parseData = (countryInfo) => {
  if (Object.keys(countryInfo).length !== 5) {
    return;
  }

  let country = countryInfo[Object.keys(countryInfo)[0]].split('(')[0].split('[')[0] || '';
  const infecteds = countryInfo[Object.keys(countryInfo)[1]].replace('.', '') || 0;
  const deaths = countryInfo[Object.keys(countryInfo)[2]].replace('.', '') || 0;
  const survivors = countryInfo[Object.keys(countryInfo)[3]].replace('.', '') || 0;
  
  if(country == 'China ') country += '(continental)';

  const parsedCountryInfo = {
    country,
    totalInfecteds: parseInt(infecteds, 10),
    totalDeaths: parseInt(deaths, 10),
    totalSurvivors: parseInt(survivors, 10),
  };

  return parsedCountryInfo;
};

const getTable = async () => {
  try {
    const tableData = await scraper
      .get('https://pt.wikipedia.org/wiki/Predefini%C3%A7%C3%A3o:2019-20_Coronav%C3%ADrus_de_Wuhan/Mundo');
    let table = [];
    for (const tableEach of tableData) {
      if (tableEach.length > 20) {
        table = tableEach;
        break;
      }
    }
    return table;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const getParsedData = async () => {
  try {
    const wikipediaData = await getTable();
    const parsedData = wikipediaData.map((item) => (parseData(item)));
    return parsedData.filter((data) => data !== undefined);
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

module.exports = { getParsedData };
