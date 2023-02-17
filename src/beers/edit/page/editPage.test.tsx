import { render, screen } from '@testing-library/react';
import EditPage from './editPage';

describe('Given Edit component', () => {
  describe('When it is render', () => {
    test('Then it should have the Edit in the screen', () => {
      render(<EditPage></EditPage>);
      const element = screen.getByText(/My Beers/i);
      expect(element).toBeInTheDocument();
    });
  });
});
