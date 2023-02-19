import { getByText, render, screen } from '@testing-library/react';
import AddForm from './form';

describe('Given Form component', () => {
  describe('When we render it', () => {
    test('Then it should be on screen', () => {
      const imageUrlInput = screen.getByPlaceholderText('Image URL');
      const nameInput = screen.getByPlaceholderText('Name');
      const ibuInput = screen.getByPlaceholderText('IBU');
      const abvInput = screen.getByPlaceholderText('ABV');
      const typeInput = screen.getByPlaceholderText('Type');
      const descriptionInput = screen.getByPlaceholderText('Description');

      const result = [
        imageUrlInput,
        nameInput,
        ibuInput,
        abvInput,
        typeInput,
        descriptionInput,
      ];

      expect(result).toBeInTheDocument();
    });
  });
});
