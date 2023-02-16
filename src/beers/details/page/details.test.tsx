import { render, screen } from '@testing-library/react';
import { DetailedCard } from '../../../core/components/detailsCard/detailsCard';
import DetailsPage from './details';

jest.mock('../../../core/components/detailsCard/detailsCard');

describe('Given Details page component', () => {
  describe('When we are trying to render the component', () => {
    test('Then it should render the Details text', () => {
      render(<DetailsPage></DetailsPage>);
      const text = 'Details';
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
    describe('When we are rendering the component', () => {
      test('It should call the detailsCard component', () => {
        render(<DetailsPage></DetailsPage>);
        expect(DetailedCard).toHaveBeenCalled();
      });
    });
  });
});
