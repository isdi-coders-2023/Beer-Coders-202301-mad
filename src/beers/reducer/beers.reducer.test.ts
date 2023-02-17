import { BeerStructure } from '../models/beer';
import { beersActions } from './beers.actions';
import { beersReducer } from './beers.reducer';

describe('Given the beersReducer function', () => {
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

  const mockLoadAction = {
    type: beersActions.load,
    payload: mockState,
  };

  // TEMPORAL: Hasta resolver test.
  // const mockAddAction = {
  //   type: beersActions.add,
  //   payload: mockState,
  // };

  // const mockUpdateAction = {
  //   type: beersActions.update,
  //   payload: mockState,
  // };

  // const mockDeleteAction = {
  //   type: beersActions.delete,
  //   payload: mockState,
  // };

  const mockBeerDefaultAction = {
    type: 'default',
    payload: mockState,
  };

  describe('When the action.type is the "beersActions.load" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(mockState, mockLoadAction);
      expect(element).toEqual(mockState);
    });
  });

  // TEMPORAL: Hasta resolver test.
  // describe('When the action.type is the "beersActions.add" case', () => {
  //   test('Then, the state should be returned', async () => {
  //     const element = beersReducer(mockState, mockAddAction);
  //     expect(element).toEqual(mockState);
  //   });
  // });

  // describe('When the action.type is the "beersActions.update" case', () => {
  //   test('Then, the state should be returned', async () => {
  //     const element = beersReducer(mockState, mockUpdateAction);
  //     expect(element).toEqual(mockState);
  //   });
  // });

  // describe('When the action.type is the "beersActions.delete" case', () => {
  //   test('Then, the state should be returned', async () => {
  //     const element = beersReducer(mockState, mockDeleteAction);
  //     expect(element).toEqual(mockState);
  //   });
  // });

  describe('When the action.type is the "default" case', () => {
    test('Then, the state should be returned', async () => {
      const element = beersReducer(mockState, mockBeerDefaultAction);
      expect(element).toEqual(mockState);
    });
  });
});
