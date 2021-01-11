// Imports
import { getFlowers, useFlowers } from "./flowerProvider.js";
import { getDistributors, useDistributors } from "../distributors/distributorProvider.js";
import { flowerHTML } from "./flower.js";

// Selectors
const flowerContainer = document.querySelector('.flowerContainer');

// Local Variables
let flowers = [];
let distributors = [];

export const flowerList = () => {
    getFlowers()
    .then(getDistributors)
    .then(() => {
        flowers = useFlowers();
        distributors = useDistributors();
        flowerContainer.innerHTML = flowers.map(flower => flowerHTML(flower)).join("");
    });
};