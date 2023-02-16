import { useCallback, useReducer } from 'react';
import { BeerStructure } from '../models/beer';
import { beersReducer } from '../reducer/beers.reducer';
import { BeerApiRepo } from '../services/public.repo/beer.api.repo';
import * as ac from '../reducer/beers.actions.creator';
import { act } from 'react-dom/test-utils';

export type UseBeersStructure = ReturnType<typeof useBeers>;

export function useBeers(repo: BeerApiRepo) {
  const initialState: BeerStructure[] = [];

  const [beerList, dispatch] = useReducer(beersReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadBeers = useCallback(async () => {
    try {
      const beerList = await repo.loadPublicBeers();

      act(() => {
        dispatch(ac.loadBeersCreator(beerList));
      });
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  return {
    beerList,
    loadBeers,
  };
}
