import { useState, useEffect } from 'react';
import { useCallback, useReducer } from 'react';
import { BeerStructure, ProtoBeerStructure } from '../models/beer';
import { BeerApiRepo } from '../services/public.repo/beer.api.repo';

// import { beersReducer } from '../reducer/beers.reducer';

export type UseBeersStructure = ReturnType<typeof useBeers>;

export function useBeers(repo: BeerApiRepo) {
  const initialState: BeerStructure[] = [];

  const [beerList, dispatch] = useReducer(beersReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadBeers = useCallback(async () => {
    try {
      const notes = await repo.loadBeers();
      dispatch(ac.loadBeers(notes));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addBeer = async (beer: ProtoBeerStructure) => {
    //   try {
    //     const finalBeer = await repo.createBeer(beer);
    //     dispatch(ac.addBeersCreator(finalBeer));
    //   } catch (error) {
    //     handlerError(error as Error);
    //   }
    // };

    // const deleteBeer = async (id: BeerStructure['id']) => {
    //   try {
    //     await repo.delete(id);
    //     dispatch(ac.deleteNotesCreator(id));
    //   } catch (error) {
    //     handlerError(error as Error);
    //   }
    // };

    // const updateBeer = async (beer: BeerStructure) => {
    //   try {
    //     const finalNote = await repo.update(beer);
    //     dispatch(ac.updateNotesCreator(finalNote));
    //   } catch (error) {
    //     handlerError(error as Error);
    //   }
    // };

    return {
      beerList,
      loadBeers,
    };
  };
}
