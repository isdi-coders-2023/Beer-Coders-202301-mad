/* eslint-disable testing-library/no-unnecessary-act */
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MenuOption } from '../app/App';
import { AppRouter } from './app.router';
import '@testing-library/jest-dom';
import { UseBeersStructure } from '../../../beers/hooks/use.beers';
import { BeersContext } from '../../../beers/context/beers.context';

describe('Given AppRouter component', () => {
  const mockOptions: MenuOption[] = [
    { label: 'Home', path: '/home' },
    {
      label: 'My Beers',
      path: '/mybeers',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Details',
      path: '/details',
    },
  ];

  const mockContext = {
    loadBeers: jest.fn(),
    beerList: [{ name: 'test' }],
  } as unknown as UseBeersStructure;

  const prepareTestFunction = (number: number) => {
    render(
      <BeersContext.Provider value={mockContext}>
        <Router
          initialEntries={[
            '/home',
            '/about',
            '/details',
            '/anyText',
            '/mybeers',
          ]}
          initialIndex={number}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      </BeersContext.Provider>
    );
  };

  describe('When it is render and the path is "/home"', () => {
    test('Then, the title "Discover" of Home Page should be in the screen', async () => {
      prepareTestFunction(0);
      const element = await screen.findByRole('heading', { name: 'Discover' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/about"', () => {
    test('Then, the title "About us" of About page  should be in the screen', async () => {
      prepareTestFunction(1);
      const element = await screen.findByRole('heading', {
        name: 'About us',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Details page', () => {
    test('Then, it should render the Details component', async () => {
      prepareTestFunction(2);
      const element = await screen.findByRole('heading', {
        name: 'Details',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Error page', () => {
    test('Then, it should render the Error component', async () => {
      prepareTestFunction(3);
      const element = await screen.findByText(/404/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/mybeers"', () => {
    test('Then, the title "My Beers" of My Beers Page should be in the screen', async () => {
      prepareTestFunction(4);
      const element = await screen.findByRole('heading', {
        name: 'My Beers',
      });
      expect(element).toBeInTheDocument();
    });
  });
});
