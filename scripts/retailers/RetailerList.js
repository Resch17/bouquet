import { getRetailers, useRetailers } from './retailerDataProvider.js';
import { Retailer } from './Retailer.js';
import { getDistributors } from '../distributors/distributorDataProvider.js';

const contentTarget = document.querySelector('.retailerList');

export const RetailerList = () => {
  getRetailers()
    .then(getDistributors)
    .then(() => {
      const retailers = useRetailers();

      contentTarget.innerHTML = retailers
        .map((retailer) => Retailer(retailer))
        .join('');
    });
};
