// Define the Smoothie class
class Smoothie {
    constructor(base, fruits, addons) {
        this.base = base;
        this.fruits = fruits;
        this.addons = addons;
    }

    getDescription() {
        let description = `Your smoothie includes ${this.base} as a base, `;
        description += this.fruits.length > 0 ? `${this.fruits.join(', ')} as fruits, ` : 'no fruits, ';
        description += this.addons.length > 0 ? `and ${this.addons.join(', ')} as add-ons.` : 'and no add-ons.';
        return description;
    }
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const smoothieForm = document.getElementById('smoothieForm');
    const smoothieDescriptionDiv = document.getElementById('smoothieDescription');

    // Handle the form submission
    smoothieForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather the base selection
        const base = smoothieForm.querySelector('select[name="base"]').value;

        // Gather the selected fruits
        const fruitCheckboxes = smoothieForm.querySelectorAll('input[name="fruits"]:checked');
        const fruits = Array.from(fruitCheckboxes).map(cb => cb.value);

        // Gather the selected add-ons
        const addonCheckboxes = smoothieForm.querySelectorAll('input[name="addons"]:checked');
        const addons = Array.from(addonCheckboxes).map(cb => cb.value);

        // Create a new smoothie object
        const smoothie = new Smoothie(base, fruits, addons);

        // Display the smoothie description
        smoothieDescriptionDiv.textContent = smoothie.getDescription();
    });
});
