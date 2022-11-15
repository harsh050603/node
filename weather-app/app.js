//Asynchronous nodejs
// console.log('Starting')
// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)
// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)
// console.log('Stopping')

//const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address')    
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if(error){
            return console.log(error)
        } 
        
         forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
        
            console.log(location)
            console.log(forecastData)
             })
          })
}


//  const url = 'http://api.weatherstack.com/current?access_key=3852c15dd31149acf30d2f1551cbd044&query=37.8267,-122.4233&units=f'

//  request({ url: url, json:true }, (error, response) => {
//  if(error){
//      console.log('Unable to connect to weather service!')
//  }else if(response.body.error){
//  console.log('Unable to find location!')
//  }else {
//      console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
//  }
// })

//GEOCODING
//ADDRESS -> LAT/LONG -> WEATHER

//  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9ubml0MzAxMiIsImEiOiJja3dqZ2VraHoxMmZ2MnRtZHhydDdtaHZiIn0.rw_ST19gG_YwOwxbRfhtzw&limit=1'

//  request({ url: geocodeURL, json: true }, (error, response) =>{
//     if(error){
//         console.log('Unable to connect to location services!')
//     }else if (response.body.features.length === 0) {
//         console.log('unable to find location.Try another search!')
//     } else{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//     }   
//  })





