document.addEventListener("DOMContentLoaded", function () {
  const d = new Date();
  const day = d.getDay();
  let displayBanner = document.querySelector('.display-banner');

  // If the display-banner element doesn't exist, create it
  if (!displayBanner) {
    displayBanner = document.createElement('div');
    displayBanner.classList.add('display-banner');
    document.body.insertBefore(displayBanner, document.body.firstChild);
  }

  // Set the text content for the display banner based on the current day
  switch (day) {
    case 1:
      displayBanner.textContent = 'Please attend meet and greet on Monday at 7 pm';
      break;
    case 2:
      displayBanner.textContent = 'Please attend meet and greet on Tuesday at 7 pm';
      break;
    case 3:
      displayBanner.textContent = 'Please attend meet and greet on Wednesday at 7 pm';
      break;
    // Add cases for other days as needed
    default:
      displayBanner.textContent = 'No special event today. Check back later for updates.';
      break;
  }

  // Create an img element with a placeholder image (adjust the path accordingly)
  const imgElement = document.createElement('img');
  imgElement.src = 'images/tick.webp'; // Adjust the path to your image
  imgElement.alt = 'Banner Image';

  // Create the close button and add the event listener outside the switch statement
  const closeButton = document.createElement('button');
  closeButton.textContent = 'OK';
  closeButton.addEventListener('click', () => {
    displayBanner.style.display = 'none';
  });

  displayBanner.appendChild(imgElement);
  displayBanner.appendChild(closeButton);
});
