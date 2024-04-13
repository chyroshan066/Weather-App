//Initializing
const temperatureField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const formField=document.querySelector("form");
const searchField=document.querySelector("#searchbar");

let target="London";

//To change html
const fetchData=async (target)=>{
    try {
        const url=`http://api.weatherapi.com/v1/current.json?key=9b47af278434418dbaa52112230611&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    
    updateDom(data.current.temp_c,data.location.name,data.location.localtime,data.current.condition.icon,data.current.condition.text);
    } catch (error) {
        alert("Location not found");
    }
};

//To update
function updateDom(temperature,city,date,emoji,weather){
    temperatureField.innerText=temperature;
    cityField.innerText=city;
    dateField.innerText=date;
    emojiField.src=emoji;
    weatherField.innerText=weather;
}

//Adding event listeners
const search=(e)=>{
    e.preventDefault();
    target=searchField.value;
    fetchData(target);
}

formField.addEventListener("submit",search);

//Calling function
fetchData();