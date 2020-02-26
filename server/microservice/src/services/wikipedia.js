const scraper = require('table-scraper');

const structure = (country, amount) => ({ country, amount });

const parseData = (country) => {
  const countryInfo = [];
  if (Object.keys(country).length !== 5) {
    return;
  }

  const countryName = country[Object.keys(country)[0]].split('[')[0] || '';
  const countryInfected = country[Object.keys(country)[1]] || 0;
  const countryDeaths = country[Object.keys(country)[2]] || 0;
  const countrySurvivors = country[Object.keys(country)[3]] || 0;

  countryInfo.push(structure(countryName, parseInt(countryInfected, 10)));
  countryInfo.push(structure(countryName, parseInt(countryDeaths, 10)));
  countryInfo.push(structure(countryName, parseInt(countrySurvivors, 10)));

  return countryInfo;
};

const getTable = async () => {
  try {
    const tableData = await scraper
      .get('https://pt.wikipedia.org/wiki/Surto_de_2019%E2%80%932020_de_coronav%C3%ADrus_por_pa%C3%ADs');
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
