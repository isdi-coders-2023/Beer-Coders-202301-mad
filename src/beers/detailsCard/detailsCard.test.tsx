/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from '@testing-library/react';
import { BeerStructure } from '../models/beer';
import { DetailedCard } from './detailsCard';

const mockBeer: BeerStructure = {
  name: 'Test beer',
} as unknown as BeerStructure;

describe('Given detailsCard component', () => {
  describe('When the component is render', () => {
    beforeEach(async () => {
      await act(async () =>
        render(<DetailedCard beer={mockBeer}></DetailedCard>)
      );
    });
    test('Then, the <img> element should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
