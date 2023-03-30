function displayTemperature(response) {
    document.querySelector("#city-search").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = response.data.main.temp;
}

function searchCity(event) {
    event.preventDefault();
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let city = document.querySelector("#city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
  }
  
  let form = document.querySelector("#input-form");
  form.addEventListener("submit", searchCity);
  
  let now = new Date();
  let dayOf = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
  let day = days[now.getDay()];
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];
  
  let date = document.querySelector("#currentDate");
  date.innerHTML = `${day}, ${month} ${dayOf}, ${year}`;
  
  let time = document.querySelector("#currentTime");
  time.innerHTML = `${hours} : ${minutes}`;
  