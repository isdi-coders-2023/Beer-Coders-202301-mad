import { BeerStructure } from '../../models/beer';
import './edit.scss';

type EditProps = {
  editBeer: BeerStructure | any;
};
export default function Edit({ editBeer }: EditProps) {
  return (
    <>
      <h2>My Beers - Edit</h2>;
    </>
  );
}
