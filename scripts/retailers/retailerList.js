// Imports
import { getRetailers, useRetailers } from "./retailerProvider.js";
import { retailerHTML } from "./retailer.js";

// Selectors
const retailerContainer = document.querySelector('.retailerContainer');

// Local Variables
let retailers = [];

export const retailerList = () => {
    getRetailers()
    .then(() => {
        retailers = useRetailers();
        retailerContainer.innerHTML = retailers.map(retailer => retailerHTML(retailer)).join("");
    });
};