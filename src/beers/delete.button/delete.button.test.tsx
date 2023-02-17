import { render, screen } from '@testing-library/react';
import DeleteButton from '../delete.button/delete.button';

describe('Given DeleteButton component', () => {
  describe('When it is render', () => {
    test('Then it should have the button in the screen', () => {
      render(<DeleteButton></DeleteButton>);
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
