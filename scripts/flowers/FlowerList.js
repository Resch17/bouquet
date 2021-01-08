import { getFlowers, useFlowers } from './flowerDataProvider.js';
import { Flower } from './Flower.js';

const contentTarget = document.querySelector('.flowerList');

export const FlowerList = () => {
  getFlowers().then(() => {
    const flowers = useFlowers();

    contentTarget.innerHTML = flowers.map((flower) => Flower(flower)).join('');
  });
};
