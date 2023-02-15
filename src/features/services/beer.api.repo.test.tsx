import { BeerApiRepo } from './beer.api.repo';

describe('Given there BeerApiRepo class', () => {
  describe('When we intance the class with new BeerApiRepo', () => {
    let repo: BeerApiRepo;

    beforeEach(() => {
      repo = new BeerApiRepo();
    });

    test('Then if we call the loadBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      const result = await repo.loadBeers();
      expect(result).toEqual([]);
    });

    test('Then if we call the getBeer() method, the result should be equal to the mock value', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: '',
        }),
      });

      const result = await repo.getBeer(1);
      expect(result).toEqual({ name: '' });
    });
  });
});
