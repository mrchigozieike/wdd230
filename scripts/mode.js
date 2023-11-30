const modeButton = document.querySelector("#mode");
const main = document.querySelector(".main");
const infoSection = document.querySelector(".info");
var allLinksExceptNav = document.querySelectorAll('a:not(.nav)');

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        // Dark mode
        main.style.background = "#000";
        main.style.color = "#fff";
        infoSection.style.color = "#000"; // Set the text color for the info section

        allLinksExceptNav.forEach(function(link) {
            link.style.color = "#fff"; // Set the color for each link
            console.log(link.href);
        });

        modeButton.textContent = "🔆";
    } else {
        // Light mode
        main.style.background = "#eee";
        main.style.color = "#000";
        infoSection.style.color = "#000"; // You may need to adjust this if needed

        allLinksExceptNav.forEach(function(link) {
            link.style.color = "#000"; // Set the color for each link
        });

        modeButton.textContent = "🕶️";
    }
});
