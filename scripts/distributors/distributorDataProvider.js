let distributors = [];

export const getDistributors = () => {
  return fetch('http://localhost:8088/distributors')
    .then((res) => res.json())
    .then((parsed) => {
      distributors = parsed;
    });
};

export const useDistributors = () => distributors.slice();
