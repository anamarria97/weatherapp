const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const brasov = document.querySelector(".dropdown-menu .brasov");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const ploiesti = document.querySelector(".dropdown-menu .ploiesti");
const busteni = document.querySelector(".dropdown-menu .busteni");
const maramures = document.querySelector(".dropdown-menu .maramures");
const constanta = document.querySelector(".dropdown-menu .constanta");
const oradea = document.querySelector(".dropdown-menu .oradea");

function updateCurrentCity(city) {
  // Selectam spatiul de pe ecran dedicat afisarii orasului curent si ii adaugam continut.
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  // Reafisam prognoza pe 5 zile, pentru noul oras.
  displayWeatherForecast(city);
}

// Adauagam event listenerii pe butoanele din dropdown.
bucharest.addEventListener("click", function () {
  updateWeather("Bucharest");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
brasov.addEventListener("click", function () {
  updateWeather("Brașov");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
ploiesti.addEventListener("click", function () {
  updateWeather("Ploiești");
});
busteni.addEventListener("click", function () {
  updateWeather("Bușteni");
});
maramures.addEventListener("click", function () {
  updateWeather("Maramureș");
});
constanta.addEventListener("click", function () {
  updateWeather("Constanța");
});
