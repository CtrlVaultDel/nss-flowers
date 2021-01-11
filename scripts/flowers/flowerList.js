// Imports
import { getFlowers, useFlowers } from "./flowerProvider.js";
import { flowerHTML } from "./flower.js";

// Selectors
const flowerContainer = document.querySelector('.flowerContainer');

// Local Variables
let flowers = [];

export const flowerList = () => {
    getFlowers()
    .then(() => {
        flowers = useFlowers();
        flowerContainer.innerHTML = flowers.map(flower => flowerHTML(flower)).join("");
    });
};