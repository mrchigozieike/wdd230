// Get the current temperature and wind speed from the HTML
const currentTemperature = parseFloat(document.querySelector('.temperature').textContent);
const windSpeed = parseFloat(document.querySelector('.windspeed').textContent);

// Function to calculate wind chill
function calculateWindChill(temperature, speed) {
  if (temperature <= 50 && speed > 3.0) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    return Math.round(windChill * 10) / 10; // Round to one decimal place
  } else {
    return 'N/A';
  }
}

// Calculate wind chill
const windChillValue = calculateWindChill(currentTemperature, windSpeed);

// Update the HTML with the wind chill value
document.querySelector('.windchill').textContent = `Wind Chill: ${windChillValue}°F`;
