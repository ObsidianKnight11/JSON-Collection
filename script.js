document.addEventListener("DOMContentLoaded", function () {
    fetch("weapons.json")
        .then(response => response.json())
        .then(data => displayWeapons(data.items))
        .catch(error => console.error("Error loading JSON:", error));
});

function displayWeapons(weapons) {
    const container = document.getElementById("weapons-container");
    weapons.forEach(weapon => {
        const weaponCard = document.createElement("div");
        weaponCard.classList.add("weapon-card");

        weaponCard.innerHTML = `
            <h2>${weapon.name}</h2>
            <p><strong>Game:</strong> ${weapon.game_of_origin}</p>
            <p>${weapon.description}</p>
            <img src="${weapon.multimedia.image}" alt="${weapon.name}">
        `;

        container.appendChild(weaponCard);
    });
}
