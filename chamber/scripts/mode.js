const modeButton = document.querySelector("#mode");
const main = document.querySelector(".main");
const infoSection = document.querySelector(".info");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        // Dark mode
        main.style.background = "#000";
        main.style.color = "#fff";
        infoSection.style.color = "#000"; // Set the text color for the info section
        modeButton.textContent = "🔆";
    } else {
        // Light mode
        main.style.background = "#eee";
        main.style.color = "#000";
        
        infoSection.style.color = "#fff"; // Set the text color for the info section
        modeButton.textContent = "🕶️";
    }
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const form = document.querySelector('form');

  // Get the element with the class 'display-thanks'
  const thanksContainer = document.querySelector('.display-thanks');

  // Add a submit event listener to the form
  form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display the thank you message
    thanksContainer.innerHTML = '<p>Thank you for submitting the form!</p><button id="closeButton">Close</button>';

    // Add a click event listener to the close button
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
      // Redirect to the home page (index.html)
      window.location.href = 'index.html';
    });
  });
});