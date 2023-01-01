const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "25ab4d31b9msheee4e9bad0d4df4p1ecaf6jsn74db06801763",
    "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
  },
};

function getAir(cityName) {
  document.getElementById("spinner").style.display = "block";
  fetch(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?" +
      `city=${cityName}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      CO.innerHTML = response.CO.concentration;
      NO2.innerHTML = response.NO2.concentration;
      O3.innerHTML = response.O3.concentration;
      SO2.innerHTML = response.SO2.concentration;
      PM10.innerHTML = response.PM10.concentration;
      CO_aqi.innerHTML = response.CO.aqi;
      NO2_aqi.innerHTML = response.NO2.aqi;
      O3_aqi.innerHTML = response.O3.aqi;
      SO2_aqi.innerHTML = response.SO2.aqi;
      PM10_aqi.innerHTML = response.PM10.aqi;
      overall_aqi.innerText = response.overall_aqi;
      document.getElementById("spinner").style.display = "none";
      if (response.overall_aqi <= 50) {
        indicator.innerHTML = "<b>Good</b>";
        indicator.style.color = "green";
      } else if (response.overall_aqi >= 51 && response.overall_aqi <= 100) {
        indicator.innerHTML = "<b>Moderate</b>";
        indicator.style.color = "yellow";
      } else if (response.overall_aqi >= 101 && response.overall_aqi <= 150) {
        indicator.innerHTML = "<b>Unhealthy for sensative groups</b>";
        indicator.style.color = "orange";
      } else if (response.overall_aqi >= 151 && response.overall_aqi <= 200) {
        indicator.innerHTML = "<b>Unhealthy</b>";
        indicator.style.color = "red";
      } else if (response.overall_aqi >= 201 && response.overall_aqi <= 300) {
        indicator.innerHTML = "<b>Very Unhealthy</b>";
        indicator.style.color = "purple";
      } else if (response.overall_aqi >= 301) {
        indicator.innerHTML = "<b>Hazardous</b>";
        indicator.style.color = "maroon";
      }
      console.log(response);
      city.innerText = cityName;
    })
    .catch((err) => {
      document.getElementById("spinner").style.display = "none";
      alert("City not found or check connection!!");
      console.error(err);
    });
}
getAir("Delhi");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getAir(searchInput.value);
});
