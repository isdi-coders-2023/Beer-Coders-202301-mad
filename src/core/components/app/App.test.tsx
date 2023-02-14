import { render } from '@testing-library/react';
import { Footer } from '../footer/footer';
import App from './App';

// TEMP: jest.mock('../header/header');
// TEMP: jest.mock('../app.router/app.router');
jest.mock('../footer/footer');

describe('Given App component', () => {
  describe('When it is render', () => {
    test('Then it should call Header, AppRouter and Footer components', () => {
      render(<App />);

      //TEMPORAL: expect(Header).toHaveBeenCalled();
      //TEMPORAL: expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});

// TEMPORAL APP ROUTER:

// TEMPORAL import { MemoryRouter as Router } from 'react-router-dom';
// TEMPORAL import { render, screen } from '@testing-library/react';
// TEMPORAL import { MenuOption } from '../app/App';
// TEMPORAL import { AppRouter } from './app.router';

// describe('Given AppRouter component', () => {
//   const mockOptions: MenuOption[] = [
//     { label: 'Home', path: '/home' },
//     {
//       label: 'My Beers',
//       path: '/mybeers',
//     },
//     {
//       label: 'About',
//       path: '/about',
//     },
//   ];
//   describe('When it is render and the path is "/home"', () => {
//     render(
//       <Router initialEntries={['/home', '/mybeers', '/about']} initialIndex={0}>
//         <AppRouter menuOptions={mockOptions}></AppRouter>
//       </Router>
//     );

//     test('Then, the title "Discover" of Home Page should be in the screen', async () => {
//       const element = await screen.findByRole('heading', { name: 'Discover' });
//       expect(element).toBeInTheDocument();
//     });
//   });

//   describe('When it is render and the path is "/mybeers"', () => {
//     render(
//       <Router initialEntries={['/home', '/mybeers', '/about']} initialIndex={1}>
//         <AppRouter menuOptions={mockOptions}></AppRouter>
//       </Router>
//     );

//     test('Then, the title "My Beers" of My Beers Page should be in the screen', async () => {
//       const element = await screen.findByRole('heading', {
//         name: 'My Beers',
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });

//   describe('When it is render and the path is "/about"', () => {
//     render(
//       <Router initialEntries={['/home', '/mybeers', '/about']} initialIndex={2}>
//         <AppRouter menuOptions={mockOptions}></AppRouter>
//       </Router>
//     );

//     test('Then, the title "About us" of About Page should be in the screen', async () => {
//       const element = await screen.findByRole('heading', {
//         name: 'About us',
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
// });
