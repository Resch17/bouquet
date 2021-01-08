import { useDistributors } from '../distributors/distributorDataProvider.js';
import { useDistributorNurseries } from '../nurseries/distributorNurseryDataProvider.js';
import { useFlowerNurseries } from '../nurseries/flowerNurseryDataProvider.js';
import { useNurseries } from '../nurseries/nurseryDataProvider.js';

export const Retailer = (retailer) => {
  const distributors = useDistributors();
  const nurseries = useNurseries();
  const flowerNurseries = useFlowerNurseries();
  const distNurseries = useDistributorNurseries();

  const distributor = distributors.find(
    (dist) => dist.id === retailer.distributorId
  );

  const theseNurseries = distNurseries.filter(
    (rel) => rel.distributorId === distributor.id
  );

  const theseNurseriesHtml = theseNurseries
    .map((rel) => {
      const thisNursery = nurseries.find((n) => n.id === rel.nurseryId);
      return `<li>${thisNursery.name}</li>`;
    })
    .join('');

  return `
  <div class="retailer">
    <h2>${retailer.name}</h2>
    <p>${retailer.address} ${retailer.city}, ${retailer.state}</p>
    <h3><u>Distributor</u></h3>
    <p><b>${distributor.name}</b> - ${distributor.city}, ${distributor.state}</p>
    <section class="retailer__nurseries">
    <h3>Flowers from these nurseries:</h3>
    <ul>${theseNurseriesHtml}</ul>
    </section>
  </div>
  `;
};
