import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';
import { beersReducer } from './beers.reducer';

describe('Given the beersReducer function', () => {
  // const initialState: BeerStructure[] = [];

  const mockState = [
    {
      id: 1,
      picture: 'test',
      name: 'test',
      ibu: 1,
      abv: 1,
      type: 'test',
      description: 'test',
    },
    {
      id: 2,
      picture: 'test',
      name: 'test',
      ibu: 2,
      abv: 2,
      type: 'test',
      description: 'test',
    },
  ] as unknown as BeerStructure[];

  const mockBeerAction = {
    type: beersActions.load,
    payload: mockState,
  };

  const mockBeerDefaultAction = {
    type: 'default',
    payload: mockState,
  };

  describe('When the action.type is the "beersActions.load" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(
        mockState,
        mockBeerAction
      ) as BeerStructure[];
      expect(element).toEqual(mockState);
    });
  });

  describe('When the action.type is the "default" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(
        mockState,
        mockBeerDefaultAction
      ) as BeerStructure[];
      expect(element).toEqual(mockState);
    });
  });
});
