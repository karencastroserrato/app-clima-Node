const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        //Your_API_Key: c28c41f7c0846a,
        //LocationIQ_Endpoint_URL: https://us1.locationiq.com
        baseURL: `https://us1.locationiq.com/v1/search.php?key=c28c41f7c0846a&q=${encodeUrl}&format=json`,
        //headers: {'X-Custom-Header': 'foobar'}
    });

    const respuesta = await instance.get()

    if (respuesta.data.length == 0) {
        throw new Error(`No existe esa direccion ${dir}`)
    }

    const data = respuesta.data[0];
    const direccion = data.display_name;
    const lat = data.lat;
    const long = data.lon;
    /*  .then(respuesta => {
           // console.log(respuesta.data[0]);
        })
        .catch(err => {
            console.log('Error!!!!', err)
        })
 */
    return {
        direccion,
        lat,
        long
    }


}

module.exports = {
    getLugarLatLong,
}