const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '068bec570emsh6ee71ac895fbcafp11023bjsn0f84d89777d7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) =>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
        
        
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            
            feels_like.innerHTML = response.feels_like
            
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            })
        .catch(err => console.error(err));  
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")



const getWeather2 = (city) => {
    cityName2.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp2.innerHTML = response.temp
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            })
        .catch(err => console.error(err));
}
getWeather2("New York")



const getWeather3 = (city) => {
    cityName3.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp3.innerHTML = response.temp
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            })
        .catch(err => console.error(err));
}
getWeather3("Chicago")

const getWeather4 = (city) => {
    cityName4.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp4.innerHTML = response.temp
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            })
        .catch(err => console.error(err));
}
getWeather4("Berlin")



 