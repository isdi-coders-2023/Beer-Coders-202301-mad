import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { PrivateBeersContext } from '../context/private.beer.context';
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
  describe('When we are trying to make a new beer', () => {
    test('Then it should call the createBeer with the Data', () => {
      jest.setTimeout(10000);

      const contextValue = {
        privateBeerList: [], // array vacío para privateBeerList
        loadPrivateBeer: jest.fn(), // función mock para loadPrivateBeer
        createBeer: jest.fn(), // función mock para createBeer
        deleteBeer: jest.fn(), // función mock para deleteBeer
        editBeer: jest.fn(), // función mock para editBeer
      };

      render(
        <PrivateBeersContext.Provider value={contextValue}>
          <AddForm />
        </PrivateBeersContext.Provider>
      );
      const imageUrlInput = screen.getByPlaceholderText('Image URL');
      const nameInput = screen.getByPlaceholderText('Name');
      const ibuInput = screen.getByPlaceholderText('IBU');
      const abvInput = screen.getByPlaceholderText('ABV');
      const typeInput = screen.getByPlaceholderText('Type');
      const descriptionInput = screen.getByPlaceholderText('Description');
      const addButton = screen.getByRole('button');

      fireEvent.change(imageUrlInput, {
        target: { value: 'http://example.com/image.jpg' },
      });
      fireEvent.change(nameInput, { target: { value: 'Test Beer' } });
      fireEvent.change(ibuInput, { target: { value: '50' } });
      fireEvent.change(abvInput, { target: { value: '5.0' } });
      fireEvent.change(typeInput, { target: { value: 'IPA' } });
      fireEvent.change(descriptionInput, { target: { value: 'A test beer' } });
      fireEvent.click(addButton);

      expect(contextValue.createBeer).toHaveBeenCalledWith({
        imageUrl: 'http://example.com/image.jpg',
        name: 'Test Beer',
        ibu: 50,
        abv: 5.0,
        type: 'IPA',
        description: 'A test beer',
      });
    });
  });
});
