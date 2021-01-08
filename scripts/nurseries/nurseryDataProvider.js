let nurseries = [];

export const getNurseries = () => {
  return fetch('http://localhost:8088/nurseries')
    .then((res) => res.json())
    .then((parsed) => {
      nurseries = parsed;
    });
};

export const useNurseries = () => nurseries.slice();
