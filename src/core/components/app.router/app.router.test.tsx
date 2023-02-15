import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MenuOption } from '../app/App';
import { AppRouter } from './app.router';
import '@testing-library/jest-dom';

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
  describe('When it is render and the path is "/home"', () => {
    test('Then, the title "Discover" of Home Page should be in the screen', async () => {
      render(
        <Router
          initialEntries={['/home', '/mybeers', '/about']}
          initialIndex={0}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );

      const element = await screen.findByRole('heading', { name: 'Discover' });
      expect(element).toBeInTheDocument();
    });
  });

  // describe('When it is render and the path is "/mybeers"', () => {
  //   render(
  //     <Router initialEntries={['/home', '/mybeers', '/about']} initialIndex={1}>
  //       <AppRouter menuOptions={mockOptions}></AppRouter>
  //     </Router>
  //   );

  //   test('Then, the title "My Beers" of My Beers Page should be in the screen', async () => {
  //     const element = await screen.findByRole('heading', {
  //       name: 'My Beers',
  //     });
  //     expect(element).toBeInTheDocument();
  //   });
  // });

  describe('When it is render and the path is "/about"', () => {
    test('Then, the title "About us" of About page  should be in the screen', async () => {
      render(
        <Router
          initialEntries={['/home', '/mybeers', '/about']}
          initialIndex={2}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByRole('heading', {
        name: 'About us',
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When it is render the Details page', () => {
    test('Then, it should render the Details component', async () => {
      render(
        <Router
          initialEntries={['/home', '/mybeers', '/about', '/details']}
          initialIndex={3}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByRole('heading', {
        name: 'Details',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render the Error page', () => {
    test('Then, it should render the Error component', async () => {
      render(
        <Router
          initialEntries={[
            '/home',
            '/mybeers',
            '/about',
            '/details',
            '/anyText',
          ]}
          initialIndex={4}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByText(/404/i);
      expect(element).toBeInTheDocument();
    });
  });
});
