// script.js
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

crimeData.forEach(countryData => {
  const { country, crimeRate, latitude, longitude } = countryData;
  L.marker([latitude, longitude]).addTo(map)
    .bindPopup(`<h3>${country}</h3><p>Crime Rate: ${crimeRate}</p>`);
});

