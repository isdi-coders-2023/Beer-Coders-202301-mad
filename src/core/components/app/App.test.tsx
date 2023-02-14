import { render } from '@testing-library/react';
import { Header } from '../header/header';
import App from './App';

jest.mock('../header/header');
jest.mock('../app.router/app.router');
jest.mock('../footer/footer');

describe('Given App component', () => {
  describe('When it is render', () => {
    test('Then it should call Header, AppRouter and Footer components', () => {
      render(<App />);

      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
