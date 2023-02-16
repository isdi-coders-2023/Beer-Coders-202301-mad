/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { BeerStructure } from '../../../models/beer';
import { act, render, screen } from '@testing-library/react';
import { MainCard } from './main.card';

const mockBeer: BeerStructure = {
  name: 'Test beer',
} as unknown as BeerStructure;

describe('Given MainCard component', () => {
  describe('When, it is rendered', () => {
    beforeEach(async () => {
      await act(async () => render(<MainCard beer={mockBeer}></MainCard>));
    });

    test('Then, the <img> element should be in the document', () => {
      const elements = screen.getAllByRole('img');

      expect(elements[0]).toBeInTheDocument();
    });
  });
});
