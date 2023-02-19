import './form.scss';
import { SyntheticEvent, useContext } from 'react';
import { PrivateBeersContext } from '../context/private.beer.context';
import { ToCreateBeer } from '../models/beer';

export default function AddForm() {
  const { createBeer } = useContext(PrivateBeersContext);

  const handleSumbit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll('input');
    const imageUrl = inputs[0].value;
    const name = inputs[1].value;
    const ibu = parseInt(inputs[2].value);
    const abv = parseFloat(inputs[3].value);
    const type = inputs[4].value;
    const description = inputs[5].value;

    const newBeer = new ToCreateBeer(
      imageUrl,
      name,
      ibu,
      abv,
      type,
      description
    );
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form className="add" onSubmit={handleSumbit}>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              required
            />
            <input type="text" name="beerName" placeholder="Name" required />
            <input type="number" name="ibu" placeholder="IBU" required />
            <input
              type="number"
              step="0.1"
              name="abv"
              placeholder="ABV"
              required
            />
            <input type="text" name="beerType" placeholder="Type" required />
            <input
              type="text"
              name="beerDescription"
              placeholder="Description"
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
