//const { require } = require('yargs');

//const { require, demand } = require("yargs");
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

/*  lugar.getLugarLatLong(argv.direccion)
    .then(console.log)  */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log) */

const getInformacion = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long);
        return (`El clima de ${coordenadas.direccion} es de ${temperatura}`);
    } catch (error) {
        return (`No existen datos para ${direccion}`);
    }

}

getInformacion(argv.direccion)
    .then(console.log)
    .catch(console.log)