import { getRetailers, useRetailers } from './retailerDataProvider.js';
import { Retailer } from './Retailer.js';
import { getDistributors } from '../distributors/distributorDataProvider.js';
import { getNurseries } from '../nurseries/nurseryDataProvider.js';

const contentTarget = document.querySelector('.retailerList');

export const RetailerList = () => {
  getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(() => {
      const retailers = useRetailers();

      contentTarget.innerHTML = retailers
        .map((retailer) => Retailer(retailer))
        .join('');
    });
};
