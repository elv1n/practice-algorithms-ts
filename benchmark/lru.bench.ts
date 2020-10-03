import { LRUPlain } from '../src/data-structure/LRU/LRUPlain';
import { benchWrapper } from './benchWrapper';

const data = new Array(30)
  .fill(1)
  .map((_, index) => ({ key: `key_${index}`, value: `value_${index}` }));

export const runLRUBench = async () => {
  await benchWrapper('adding items', {
    LRUPlain: () => {
      const favorites = new LRUPlain({ max: 10 });
      data.forEach(item => {
        favorites.set(item.key, item.value);
      });
    },
  });

  await benchWrapper('all operations', {
    LRUPLain: () => {
      const favorites = new LRUPlain({ max: 10 });
      data.forEach(item => {
        favorites.set(item.key, item.value);
        const { latest } = favorites;
        const value = favorites.get(item.value);
      });
    },
  });
};
