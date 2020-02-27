const axios = require('axios');
const api = axios.create({ baseURL: "http://localhost:3333", headers: {
  "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlNTdlMzM1ZTg5NjM3NGY5YzYzMDc1MSIsInVzZXJuYW1lIjoiaW50ZWdyYWNhbyIsImNyZWF0ZWRBdCI6IjIwMjAtMDItMjdUMTU6NDE6NDEuNDM1WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDItMjdUMTU6NDE6NDEuNDM1WiIsIl9fdiI6MH0sImlhdCI6MTU4MjgxODEyMywiZXhwIjoxNjE0MzU0MTIzfQ.PrdALaw-l_WVXkhkYJ0YY9eWIgeOihDc2WNvELggYbQ"
}});

const postCountriesDataToAPI = async (countriesData) => {
  try {
    console.log(countriesData)
    countriesData.forEach(async country => {
      
      await api.post('/infecteds', country[0]);
      await api.post('/deaths', country[1]);
      await api.post('/survivors', country[2]);
    });
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { postCountriesDataToAPI };