import { LRUPlain } from './LRUPlain';

const lruClasses = [LRUPlain];

lruClasses.forEach(LRU => {
  describe(`${LRU.name} initialization`, () => {
    it('should define max options', () => {
      expect(new LRU({ max: 2 }).options.max).toEqual(2);
    });
  });
  describe(`${LRU.name} simple operations`, () => {
    let lru: LRUPlain<string>;
    beforeEach(() => {
      lru = new LRU({
        max: 3,
      });
    });

    it('should set element', () => {
      lru.set('1', 'test');
      expect(lru.size).toEqual(1);
    });
    it.only('should set in order', () => {
      lru.set('1', 'test');
      lru.set('2', 'test2');
      expect(lru.latest).toEqual('test2');
      expect(lru.size).toEqual(2);
    });
    it('should set multiple', () => {
      lru.set('1', 'test');
      lru.set('2', 'test2');
      lru.set('3', 'test3');
      lru.set('4', 'test4');
      expect(lru.latest).toEqual('test4');
      expect(lru.size).toEqual(3);
      expect(lru.get('1')).toBeUndefined();
      expect(lru.get('2')).toEqual('test2');
    });
  });
});
