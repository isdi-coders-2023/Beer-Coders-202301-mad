/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BeerApiRepo } from '../services/beer.api.repo';
import { useBeers } from './use.beers';

const mockRepo = {
  loadBeers: jest.fn(),
} as unknown as BeerApiRepo;

const TestComponent = function () {
  const { loadBeers } = useBeers(mockRepo);

  return (
    <>
      <button onClick={() => loadBeers()}></button>
    </>
  );
};

describe('Given the useBeers Custom Hook and TestComponent function', () => {
  beforeEach(() => {
    render(<TestComponent></TestComponent>);
  });

  describe('When the TestComponent is rendered', () => {
    test('Then, the button should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the TestComponent is rendered and the button is clicked', () => {
    test('Then, the loadBeers function should be called', () => {
      const element = screen.getByRole('button');
      userEvent.click(element);
      expect(mockRepo.loadBeers).toHaveBeenCalled();
    });
  });
});
