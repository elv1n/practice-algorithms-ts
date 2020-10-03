import { LRUOptions } from './types';
import { reorder } from '../../utils/arr';

export class LRUPlain<T> {
  private max: number;

  private data: Record<string, T> = {};

  private order: string[] = [];

  constructor(options: LRUOptions) {
    this.max = options.max;
  }

  get(key: string) {
    const index = this.order.indexOf(key);
    if (index !== -1) {
      this.order = reorder(this.order, index, 0);
    }
    return this.data[key];
  }

  set(key: string, value: T) {
    this.data[key] = value;
    this.rotate(key);
  }

  get latest() {
    return this.data[this.order[0]];
  }

  get options() {
    return {
      max: this.max,
    };
  }

  get size() {
    return this.order.length;
  }

  private rotate(key: string) {
    this.order.unshift(key);
    const removed = this.order.splice(this.max);
    removed.forEach(key => {
      delete this.data[key];
    });
  }
}
