// Get the temperature and wind speed values from the HTML document
let temperature = parseFloat(document.getElementById('temperature').textContent);
let windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Check if the values meet the specification limits
if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate the wind chill factor
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    // Round the result to a whole number
    windChill = Math.round(windChill);
    // Display the wind chill factor value
    document.getElementById('windChill').textContent = windChill;
} else {
    // Display "N/A" if the input values did not meet the requirements
    document.getElementById('windChill').textContent = 'N/A';
}
