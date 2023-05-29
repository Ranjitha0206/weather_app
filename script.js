let weather = {
    "apiKey": "c2313a4b8ef7461fd325da0a019b9740",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){

        const {name} = data;
        const {icon, description} = data.weather[0]; //weather is an array inside an object
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = (temp-273.15).toFixed(2) + "°C"; //temp is in kelvin
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        // document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1000/?" + name + "')";
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
//on clicking search button

document.querySelector(".search button").addEventListener("click", ()=>{
        weather.search();
});

//on pressing enter button
document.querySelector(".search-bar").addEventListener("keyup", (event)=>{
    if(event.key== "Enter"){
        weather.search();
    }
})





