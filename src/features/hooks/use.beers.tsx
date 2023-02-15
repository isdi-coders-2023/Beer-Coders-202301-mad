import { useCallback, useReducer } from 'react';
import { BeerStructure } from '../models/beer';
import { beersReducer } from '../reducer/beers.reducer';
import { BeerApiRepo } from '../services/beer.api.repo';
import * as action from '../reducer/beers.actions.creator';

export type UseBeersStructure = ReturnType<typeof useBeers>;

export function useBeers(repo: BeerApiRepo) {
  const initialState: BeerStructure[] = [];

  const [beerList, dispatch] = useReducer(beersReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadBeers = useCallback(async () => {
    try {
      const beerList = await repo.loadBeers();
      dispatch(action.loadBeersCreator(beerList));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  // const addBeer = async (beer: ProtoBeerStructure) => {
  //   try {
  //     const finalBeer = await repo.createBeer(beer);
  //     dispatch(action.addBeersCreator(finalBeer));
  //   } catch (error) {
  //     handlerError(error as Error);
  //   }
  // };

  // const deleteBeer = async (id: BeerStructure['id']) => {
  //   try {
  //     await repo.delete(id);
  //     dispatch(action.deleteBeersCreator(id));
  //   } catch (error) {
  //     handlerError(error as Error);
  //   }
  // };

  // const updateBeer = async (beer: BeerStructure) => {
  //   try {
  //     const finalNote = await repo.update(beer);
  //     dispatch(action.updateBeersCreator(finalNote));
  //   } catch (error) {
  //     handlerError(error as Error);
  //   }
  // };

  return {
    beerList,
    loadBeers,
  };
}
