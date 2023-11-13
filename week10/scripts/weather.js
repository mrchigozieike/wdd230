// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=15.76947&lon=-86.79603&appid=8f775f4f608fe18d0e030e9dd8c7c309';

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  function displayResults(data) {
    currentTemp.innerHTML = `~  ${data.current.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    let desc = data.current.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${desc} ~  `;
  }
  apiFetch(url);