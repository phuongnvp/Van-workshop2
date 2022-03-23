//Autoupdate time
let now = new Date();
let day = now.getDay();
let hour = ("0" + now.getHours()).slice(-2);
let minute = ("0" + now.getMinutes()).slice(-2);
const dayname = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let time = document.querySelector("#Date");
time.innerHTML = dayname[day] + ", " + hour + " : " + minute;
let text = "";
let count = 0;
let index = day + count + 1;
for (; count < 5; ) {
  if (index < 7) {
    text += dayname[index] + "<br />";
  } else {
    index = index - 7;
    text += dayname[index] + "<br />";
  }
  count++;
  index++;
}
let nextdate1 = document.querySelector("#nextdate");
nextdate1.innerHTML = text;

//Autoupdate city and temperature
function showtemp(response) {
  let temp = Math.round(response.data.main.temp);
  document.querySelector("#temp").innerHTML = temp;
}

function replace(event) {
  event.preventDefault();
  let currentcity = document.querySelector("#city");
  let nameofcityinput = document.querySelector("#cityinput").value;
  currentcity.innerHTML = nameofcityinput;
  let apikey = "283022c43c2140b4412329facec45d20";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${nameofcityinput}&appid=${apikey}&&units=metric`;
  axios.get(apiurl).then(showtemp);
}
let cityinput = document.querySelector("form");
cityinput.addEventListener("submit", replace);

//Current location
function showlocation(position) {
  let apikey = "283022c43c2140b4412329facec45d20";
  let apiurl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&&units=metric`;
  axios.get(apiurl2).then(showtemp);
}

function showcurrentlocation() {
  navigator.geolocation.getCurrentPosition(showlocation);
}
let button = document.querySelector("#currentlocation");
button.addEventListener("click", showcurrentlocation);
