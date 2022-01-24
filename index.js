let date_time = document.querySelector("#time");
const degree = document.querySelector(".degree");
const place = document.querySelector("#place");
const icon = document.querySelector("#icon");
const icon_text = document.querySelector("#fogg");
const search_btn = document.querySelector("#button-addon2");
const wind_value = document.querySelector("#windspeed");
const uv_value = document.querySelector("#uv");
const humidity_value = document.querySelector("#humidity");
const cloud = document.querySelector("#cloud");
const cityname = document.querySelector("#citytosearch");
const error_message = document.querySelector("#errormessage");
const lastupdated = document.querySelector("#last-updated");
const winddir = document.querySelector("#wind_dir");
//location details
const placename = document.querySelector("#placename");
const country = document.querySelector("#country");
const timezone = document.querySelector("#timezone");
const localtime = document.querySelector("#localtime");
const longitude = document.querySelector("#longitude");
const latitude = document.querySelector("#latitude");


let data = {};

search_btn.addEventListener("click", () => apicall(cityname.value));
cityname.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) apicall(cityname.value);
});

date_time.textContent = moment().format("lll");

const base_url = "http://api.weatherapi.com/v1";
const key = "4942434649d34f1c9f055631222001";
async function apicall(city) {
 
  try {
    error_message.innerHTML = "";
    cityname.value = "";
    if (!city) {
      var res = await fetch(`${base_url}/current.json?key=${key}&q=auto:ip`);
    } else {
      var res = await fetch(`${base_url}/current.json?key=${key}&q=${city}`);
    }
    data = await res.json();
    showData(data);
  } catch (err) {
    error_message.innerHTML = data.error.message;
    console.log(err);
  }
}

function showData(data) {
  console.log(data);
  degree.innerHTML = Math.round(data.current.temp_c) + "°C";
  place.innerHTML =
    data.location.name === "Dehra"
      ? data.location.name + "dun"
      : data.location.name;
  uv_value.innerHTML = data.current.uv + "%";
  wind_value.innerHTML = data.current.wind_kph + " km/h ";
  icon_text.innerHTML = data.current.condition.text;
  icon.src = data.current.condition.icon;
  humidity_value.innerHTML = data.current.humidity + " % ";
  cloud.innerHTML = data.current.cloud + " % ";
  lastupdated.innerHTML = data.current.last_updated;
  let temp_wind_dir = data.current.wind_dir;
  switch (temp_wind_dir)
 {
   case 'N': winddir.innerHTML = 'North';
   break;
   case 'NNE': winddir.innerHTML = 'North-Northeast';
   break;
   case 'NE': winddir.innerHTML = 'Northeast';
   break;
   case 'ENE': winddir.innerHTML = 'East-Northeast';
   break;
   case 'E': winddir.innerHTML = 'East';
   break;
   case 'ESE': winddir.innerHTML = 'East-Southeast';
   break;
   case 'SE': winddir.innerHTML = 'Southeast';
   break;
   case 'SSE': winddir.innerHTML = 'South-Southeast';
   break;
   case 'S': winddir.innerHTML = 'South';
   break;
   case 'SSW': winddir.innerHTML = 'South-Southwest';
   break;
   case 'SW': winddir.innerHTML = 'Southwest';
   break;
   case 'WSW': winddir.innerHTML = 'West-Southwest';
   break;
   case 'W': winddir.innerHTML = 'West';
   break;
   case 'WNW': winddir.innerHTML = 'West-Northwest';
   break;
   case 'NW': winddir.innerHTML = 'Northwest';
   break;
   case 'NNW': winddir.innerHTML = 'North-Northwest';
   break;    
 } 

 //image changing

  //location-details
  placename.innerHTML = data.location.name;
  country.innerHTML = data.location.country;
  latitude.innerHTML = data.location.lat;
  localtime.innerHTML = data.location.localtime;
  longitude.innerHTML = data.location.lon;
  timezone.innerHTML = data.location.tz_id;
}

apicall();

//https://api.weatherapi.com/v1/current.json?key=4942434649d34f1c9f055631222001&q=Goa&aqi=no

//Api  4942434649d34f1c9f055631222001*/

/*
function getData(){
    URL = "http://api.weatherapi.com/v1/current.json?key=4942434649d34f1c9f055631222001&q=auto:ip";
    fetch(url).then((response)=>{
        return response.json();    
    }).then((data)=>{
        console.log(data);
    })
}

getData();
*/
