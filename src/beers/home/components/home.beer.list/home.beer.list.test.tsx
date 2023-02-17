/* eslint-disable testing-library/no-unnecessary-act */
import { act, render } from '@testing-library/react';
import { BeersContext } from '../../../context/beers.context';
import { UseBeersStructure } from '../../../hooks/use.beers';
import { MainCard } from '../main.card/main.card';
import { HomeBeerList } from './home.beer.list';

jest.mock('../main.card/main.card');

const mockContext = {
  loadBeers: jest.fn(),
  beerList: [
    { name: 'test', id: 1 },
    { name: 'test', id: 2 },
  ],
} as unknown as UseBeersStructure;

describe('Given, HomeBeerList component', () => {
  describe('When, it is render', () => {
    test('Then, the MainCard component should be call', async () => {
      await act(async () =>
        render(
          <BeersContext.Provider value={mockContext}>
            <HomeBeerList />
          </BeersContext.Provider>
        )
      );
      expect(MainCard).toHaveBeenCalled();
    });
  });
});
