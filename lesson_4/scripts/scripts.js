// Get the current date and time
var currentDate = new Date();

// Format the time as HH:MM:SS
var currentTime = currentDate.toLocaleTimeString();

// Update the datetime element with the current time
var datetimeElement = document.getElementById("datetime");
datetimeElement.textContent = currentTime;




function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

article = document.querySelector('#message');
