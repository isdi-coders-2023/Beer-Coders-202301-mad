/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { BeerStructure } from '../../../models/beer';
import { act, render, screen } from '@testing-library/react';
import { MainCard } from './main.card';
import { usePrivateBeersStructure } from '../../../hooks/hook.private/use.private.beers';
import { PrivateBeersContext } from '../../../context/private.beer.context';
import userEvent from '@testing-library/user-event';

describe('Given MainCard component', () => {
  const mockBeer: BeerStructure = {
    name: 'Test beer',
  } as unknown as BeerStructure;

  const mockContext = {
    createBeer: jest.fn(),
  } as unknown as usePrivateBeersStructure;

  describe('When, it is rendered', () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <PrivateBeersContext.Provider value={mockContext}>
            <MainCard beer={mockBeer}></MainCard>
          </PrivateBeersContext.Provider>
        )
      );
    });

    test('Then, the <img> element should be in the document', () => {
      const elements = screen.getAllByRole('img');
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then, if the user click on Add button the createBeer function have to been called', async () => {
      const element = screen.getByRole('button');
      await act(async () => userEvent.click(element));
      expect(mockContext.createBeer).toHaveBeenCalled();
    });
  });
});
