//const { require } = require("yargs");

const axios = require('axios');
//const { default: Axios } = require('axios');


const getClima = async(lat, long) => {

    const respuestaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=03935c9337d613b11e7f5baa8a3d4ce8&units=metric`)
    return respuestaClima.data.main.temp;
}

module.exports = {
    getClima,
}