import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';

export interface Action {
  type: string;
  payload?: any;
}

export interface BeersAction extends Action {
  payload: BeerStructure | BeerStructure[] | BeerStructure['id'];
}

export const loadBeersCreator = (payload: BeerStructure[]): BeersAction => {
  return {
    type: beersActions.load,
    payload,
  };
};

// TEMPORAL: Hasta tener disponible la API Privada:

// TEMP: export const addBeersCreator = (payload: BeerStructure) => {
// TEMP:   return {
// TEMP:    type: beersActions.add,
// TEMP:    payload,
// TEMP:   };
// TEMP: };

// TEMP: export const updateBeersCreator = (payload: BeerStructure) => {
// TEMP:   return {
// TEMP:     type: beersActions.update,
// TEMP:     payload,
// TEMP:   };
// TEMP: };

// TEMP: export const deleteBeersCreator = (payload: BeerStructure['id']) => {
// TEMP:   return {
// TEMP:     type: beersActions.delete,
// TEMP:     payload,
// TEMP:   };
// TEMP: };
