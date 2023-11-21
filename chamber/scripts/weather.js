const elements = [
    { temp: '#current-temp', icon: '#weather-icon', desc: '#figcaption' },
    { temp: '#temp1', icon: '#weather-icon1', desc: '#figcaption1' },
    { temp: '#temp2', icon: '#weather-icon2', desc: '#figcaption2' },
    { temp: '#temp3', icon: '#weather-icon3', desc: '#figcaption3' },
  ];
  
  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=5.473368253538019&lon=7.081021564406769&units=metric&appid=c9aaa9542c9c5aee6ee21754decb8ff2';
  
  async function apiFetch(url) {
      try {
          const response = await fetch(url);
          if (response.ok) {
              const data = await response.json();
              displayResults(data);
          } else {
              throw Error(await response.text());
          }
      } catch (error) {
          console.log(error);
      }
  }
  
  function updateElement(element, data, index) {
      const { temp, icon, desc } = element;
      const dayData = data.daily[index];
      const iconSrc = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
      const descrip = dayData.weather[0].description;
  
      document.querySelector(temp).innerHTML = `~ ${dayData.temp.day}&deg;C`;
      document.querySelector(icon).setAttribute('src', iconSrc);
      document.querySelector(icon).setAttribute('alt', 'weather icon');
      document.querySelector(icon).setAttribute('width', '40');
      document.querySelector(icon).setAttribute('height', '40');
      document.querySelector(desc).textContent = `${descrip} ~ `;
  }
  
  function displayResults(data) {
      updateElement(elements[0], data, 0); // current day
      for (let i = 0; i < 3; i++) {
          updateElement(elements[i + 1], data, i + 1);
      }
  }
  
  apiFetch(url);
  