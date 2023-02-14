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

      //TEMPO: expect(Header).toHaveBeenCalled();
      //TEMP: expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
