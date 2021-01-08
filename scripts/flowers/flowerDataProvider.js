let flowers = [];

export const getFlowers = () => {
  return fetch('http://localhost:8088/flowers')
    .then((res) => res.json())
    .then((parsed) => {
      flowers = parsed;
    });
};

export const useFlowers = () => flowers.slice();
