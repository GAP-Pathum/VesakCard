function showCard() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // Store the name in a separate variable
    const userName = name;

    // Hide form, show card
    document.getElementById("form-container").style.display = "none";
    document.getElementById("card-container").style.display = "flex";

    // Ensure the card shows front side first
    const card = document.getElementById("card");
    card.classList.remove("flip");

    // Random wish
    const wish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wishText").innerText = `${wish}`;
    document.getElementById("name").innerText = `${userName}!`;

    // Optional: Flip automatically after delay if you want
    setTimeout(() => card.classList.add("flip"), 2000);

    // Optional: Play music
    const audio = new Audio("./mp31.mp3");
    audio.loop = true;
    audio.play().catch(err => {
        console.log("Autoplay blocked by browser.");
    });
}

function flipCard() {
    const card = document.getElementById("card");
    card.classList.toggle("flip");

    // Update wish text with a new random wish on each flip
    const name = document.getElementById('nameInput').value.trim();
    const userName = name;
    const wish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wishText").innerText = `${wish}`;
    document.getElementById("name").innerText = `${userName}!`;
}

function spawnLanterns(count = 30) {
    for (let i = 0; i < count; i++) {
        const lantern = document.createElement('div');
        lantern.classList.add('lantern');

        // Random horizontal position
        lantern.style.left = `${Math.random() * 100}vw`;
        lantern.style.top = `${100 + Math.random() * 20}vh`; // start below view

        // Random animation settings
        lantern.style.animationDuration = `${8 + Math.random() * 6}s`;
        lantern.style.animationDelay = `${Math.random() * 5}s`;

        // Random scale
        const scale = 0.8 + Math.random() * 0.5;
        lantern.style.transform = `scale(${scale})`;

        document.body.appendChild(lantern);
    }
}

// Fire spawnLanterns on starting render
window.onload = () => {
    spawnLanterns();
};
