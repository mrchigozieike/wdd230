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
        
        
        modeButton.textContent = "🕶️";
    }
});


