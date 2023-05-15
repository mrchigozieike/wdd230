const d = new Date();

document.querySelector("#currentyear").textContent = d.getFullYear();


let oLastModif = new Date();
document.querySelector("#lastmodified").textContent = oLastModif;






function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

article = document.querySelector('#message');

weekday = date.getDay();

/* Banner */

if (weekday === 1 || weekday === 2) {
  article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  article.setAttribute('class', 'banner-message');
}

let joint = document.querySelector('.join-us');
joint.addEventListener("click", () => { location.assign("https://diaz0107.github.io/wdd230/lesson08/joint.html"); });

