import { useDistributors } from '../distributors/distributorDataProvider.js';

export const Retailer = (retailer) => {
  const distributors = useDistributors();
  const distributor = distributors.find(
    (dist) => dist.id === retailer.distributorId
  );

  return `
  <div class="retailer">
    <h2>${retailer.name}</h2>
    <p>${retailer.address} ${retailer.city}, ${retailer.state}</p>
    <h3><u>Distributor</u></h3>
    <p><b>${distributor.name}</b> - ${distributor.city}, ${distributor.state}</p>
  </div>
  `;
};
