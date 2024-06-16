
const apikey = "4fe436679a3264fcbf43e727c4636540";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";


const searchbox = document.querySelector('.search input');
const searbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');




async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    // 
    if(response.status == 404){
        document.querySelector('.error').style.display = "Block";
        document.querySelector('.weather').style.display = "none";
    }else{

        var data = await response.json();
    //    console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = data.wind.speed +' km/hr';




        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./images/snow.png";
        }
        document.querySelector('.weather').style.display = "Block";
        document.querySelector('.error').style.display = "none";    
    }
}

searbtn.addEventListener('click', ()=>{
    checkweather(searchbox.value);
})



//checkweather();