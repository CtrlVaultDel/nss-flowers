// Converts the provided retailer information to an HTML representation
export const retailerHTML = (retailer) => `
<section class="retailer">
    <div class="retailer__name"><b>Retailer:</b> ${retailer.name}</div>
    <div class="retailer__distributor"><b>Distributor:</b> ${retailer.distributorInfo.name}</div>
</section>`