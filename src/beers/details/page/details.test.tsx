import { render, screen } from '@testing-library/react';
// TEMPORAL: Hasta agregar detailsCard a Details
// import { DetailedCard } from '../../detailsCard/detailsCard';
import DetailsPage from './details';

// TEMPORAL: Hasta agregar detailsCard a Details
// jest.mock('../../../beers/detailsCard/detailsCard');

describe('Given Details page component', () => {
  describe('When we are trying to render the component', () => {
    test('Then it should render the Details text', () => {
      render(<DetailsPage detailBeer></DetailsPage>);
      const text = 'Details';
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });

    // TEMPORAL: Hasta agregar detailsCard a Details
    // TEMPORAL: describe('When we are rendering the component', () => {
    // TEMPORAL:   test('It should call the detailsCard component', () => {
    // TEMPORAL:     render(<DetailsPage></DetailsPage>);
    // TEMPORAL:     expect(DetailedCard).toHaveBeenCalled();
    // TEMPORAL:   });
    // TEMPORAL: });
  });
});
