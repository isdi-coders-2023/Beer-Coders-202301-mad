import { render, screen } from '@testing-library/react';
import MyBeers from './mybeers';

describe('Given MyBeers component', () => {
  describe('When it is render', () => {
    test('Then it should have the My Beers in the screen', () => {
      render(<MyBeers></MyBeers>);
      const element = screen.getByText(/create/i);
      expect(element).toBeInTheDocument();
    });
  });
});
