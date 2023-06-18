const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
}

getProphetData();

const displayProphets = (prophets) => {
  //const cards = document.querySelector('div.cards'); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');

    let fullName = document.createElement('h2');
    let birthDate = document.createElement('h3');
    let birthPlace = document.createElement('h3');
    let numOfChild = document.createElement('h3');
    let len = document.createElement('h3');
    let yOD = document.createElement('h3');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    fullName.textContent = `${prophet.name}  ${prophet.lastname}`;
    birthDate.textContent = `${prophet.birthdate}  `;
    len.textContent = `${prophet.length}`;
    numOfChild.textContent = `${prophet.numofchildren}`;
    yOD.textContent = `${prophet.death}`;

    // Build the image portrait by setting all the relevant attribute


    birthDate.textContent = ( `Date of Birth: ${prophet.birthdate}`);
    birthPlace.textContent = ('alt', `Place of Birth: ${prophet.birthplace}`);
    numOfChild.textContent = ('alt', `Number of Children: ${prophet.numberofchildren}`);
    len.textContent = ('alt', `Prophet Years: ${prophet.length}`);
    yOD.textContent = ('alt', `Year of death ${prophet.death}`);
    fullName.textContent = ('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    //card.appendChild(birth); 
    card.appendChild(birthDate);  
    card.appendChild(birthPlace);
    card.appendChild(numOfChild);
    card.appendChild(len);
    card.appendChild(yOD);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop


} // end of function expression



