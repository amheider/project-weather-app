function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
        let cityElement=document.querySelector("#city");
        let descriptionElement=document.querySelector("#description");
        let humidityElement=document.querySelector("#humidity");
         let windElement=document.querySelector("#wind");
temperatureElement.innerHTML=Math.round(response.data.main.temp); 
cityElement.innerHTML=response.data.name;
descriptionElement=response.data.weather[0].description;
humidityElement=response.data.main.humidity;
windElement=response.data.wind.speed; 


}





let apiKey ="8e8c5cd27aecb14b08c32f678847a03f";
let apiUrl ='api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric';

console.log(apiUrl);
axios.get(apiurl).then(displayTemperature);