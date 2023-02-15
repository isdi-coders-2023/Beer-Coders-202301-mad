import { render, screen } from '@testing-library/react';
import { DetailedCard } from './detailsCard';

describe('Given detailsCard component', () => {
  describe('When we are trying to render the component', () => {
    test('Then it should render the detailed beer card', () => {
      render(<DetailedCard></DetailedCard>);
      const text = 'Heineken';
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
