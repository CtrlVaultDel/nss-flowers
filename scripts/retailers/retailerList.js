// Imports
import { getRetailers, useRetailers } from "./retailerProvider.js";
import { getDistributors, useDistributors } from "../distributors/distributorProvider.js";
import { retailerHTML } from "./retailer.js";

// Selectors
const retailerContainer = document.querySelector('.retailerContainer');

// Local Variables
let retailers = [];
let distributors = [];

export const retailerList = () => {
    getRetailers()
    .then(getDistributors)
    .then(() => {
        retailers = useRetailers();
        distributors = useDistributors();
        
        retailerContainer.innerHTML = retailers.map(retailer => retailerHTML(retailer)).join("");
    });
};