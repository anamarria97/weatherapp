const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

const btn = document.getElementById("btn-back-to-top");
// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "Bucharest");
  currentCity = "Bucharest";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
