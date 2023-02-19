import { render, screen } from '@testing-library/react';
import CreatePage from './createPage';

describe('Given Edit component', () => {
  describe('When it is render', () => {
    test('Then it should have the Add in the screen', () => {
      render(<CreatePage></CreatePage>);
      const element = screen.getByText(/My Beers/i);
      expect(element).toBeInTheDocument();
    });
  });
});
