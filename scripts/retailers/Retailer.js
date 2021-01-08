import { useDistributors } from '../distributors/distributorDataProvider.js';
import { useFlowers } from '../flowers/flowerDataProvider.js';
import { useDistributorNurseries } from '../nurseries/distributorNurseryDataProvider.js';
import { useFlowerNurseries } from '../nurseries/flowerNurseryDataProvider.js';
import { useNurseries } from '../nurseries/nurseryDataProvider.js';

export const Retailer = (retailer) => {
  const distributors = useDistributors();
  const nurseries = useNurseries();
  const flowerNurseries = useFlowerNurseries();
  const distNurseries = useDistributorNurseries();
  const flowers = useFlowers();

  const distributor = distributors.find(
    (dist) => dist.id === retailer.distributorId
  );

  const distNurseryRelationships = distNurseries.filter(
    (rel) => rel.distributorId === distributor.id
  );

  const thisRetailersNurseries = distNurseryRelationships.map((rel) => {
    return nurseries.find((n) => n.id === rel.nurseryId);
  });

  const flowerNurseryRels = thisRetailersNurseries.map((n) => {
    return flowerNurseries.find((rel) => n.id === rel.nurseryId);
  });

  const flowersAvailable = flowerNurseryRels.map((rel) => {
    return flowers.find((f) => f.id === rel.flowerId);
  });

  const flowersHtml = flowersAvailable
    .sort((a, b) => a.commonName.localeCompare(b.commonName))
    .map((f) => {
      return `<li>${f.commonName}</li>`;
    })
    .join('');

  const nurseriesHtml = thisRetailersNurseries
    .map((n) => {
      return `<li>${n.name}</li>`;
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
    <ul>${nurseriesHtml}</ul>
    </section>
    <section class="retailer__flowers">
    <h3>Flower Inventory</h3>
    <ul>${flowersHtml}</ul>
    </section>
  </div>
  `;
};
