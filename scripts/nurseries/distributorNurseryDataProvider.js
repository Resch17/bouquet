let distributorNurseries = [];

export const getDistributorNurseries = () => {
  return fetch('http://localhost:8088/useDistributorNurseries')
    .then((res) => res.json())
    .then((parsed) => {
      distributorNurseries = parsed;
    });
};

export const useDistributorNurseries = () => distributorNurseries.slice();
