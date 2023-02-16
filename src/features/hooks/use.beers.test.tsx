/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BeerApiRepo } from '../services/public.repo/beer.api.repo';
import { useBeers } from './use.beers';

describe('Given the useBeers Custom Hook and TestComponent', () => {
  let mockRepo: BeerApiRepo;
  beforeEach(() => {
    mockRepo = {
      loadPublicBeers: jest.fn(),
    } as unknown as BeerApiRepo;

    const TestComponent = function () {
      const { loadBeers } = useBeers(mockRepo);
      return (
        <>
          <button onClick={() => loadBeers()}>Load</button>
        </>
      );
    };

    render(<TestComponent></TestComponent>);
  });

  describe('When the TestComponent is rendered', () => {
    test('Then, the button should be in the document', async () => {
      const element = await screen.findByRole('button');
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the TestComponent is rendered and the button is clicked', () => {
    test('Then, the loadBeers function should be called', async () => {
      const element = await screen.findByRole('button');
      userEvent.click(element);
      expect(mockRepo.loadPublicBeers).toHaveBeenCalled();
    });
  });
});

describe('Given the useBeers Custom Hook and TestError component', () => {
  let spyLog: jest.SpyInstance;
  beforeEach(() => {
    spyLog = jest.spyOn(global.console, 'log');

    const mockRepoError = {
      loadBeers: jest.fn().mockRejectedValue(new Error('Test Error')),
    } as unknown as BeerApiRepo;

    const TestError = function () {
      const { loadBeers } = useBeers(mockRepoError);
      return (
        <>
          <button onClick={() => loadBeers()}>Error</button>
        </>
      );
    };

    render(<TestError></TestError>);
  });

  describe('When the TestError is rendered and the button is clicked', () => {
    test('Then, the loadBeers function should be catch the error', async () => {
      const element = await screen.findByRole('button');
      userEvent.click(element);
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
