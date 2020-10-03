import * as Benchmark from 'benchmark';

export const benchWrapper = (name: string, cases: Record<string, () => void>) =>
  new Promise(resolve => {
    const suite = new Benchmark.Suite();

    Object.keys(cases).forEach(key => {
      suite.add(key, cases[key]);
    });

    suite
      .on('cycle', event => {
        console.log(String(event.target));
      })
      .on('complete', function () {
        console.log(
          `Fastest is ${this.filter('fastest').map('name')} for ${name}`
        );
        resolve();
      })
      .run({ async: true });
  });
