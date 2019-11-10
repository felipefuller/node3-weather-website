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
                'It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast