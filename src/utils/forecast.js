const request = require('request')

const forecast = ( {latitude, longitude}, callback ) => {
    const url = 'https://api.darksky.net/forecast/a6d5a8e18b8e9944f93c162b5282eb40/'+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si&lang=es'

    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to the forecast!', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined,
                'Actualmente hay ' + body.currently.temperature + ' grados afuera. Hay ' + body.currently.precipProbability + '% probabilidad de lluvia. La temperatura más alta de hoy es de ' + body.daily.data[0].temperatureHigh + ' grados y la más baja es de ' + body.daily.data[0].temperatureLow + ' grados. La humedad es de ' + body.daily.data[0].humidity + '.'
            )
        }
    })
}

module.exports = forecast