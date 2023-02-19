import { useContext } from 'react';
import { PrivateBeersContext } from '../../../context/private.beer.context';
import { BeerStructure } from '../../../models/beer';
import './main.card.scss';

type MainCardProps = {
  beer: BeerStructure;
};

export function MainCard({ beer }: MainCardProps) {
  const { createBeer } = useContext(PrivateBeersContext);

  const handlerAddButton = (beer: BeerStructure) => {
    createBeer(beer);
  };

  return (
    <li className="main-card">
      <div className="info">
        <img src={beer.image_url} alt={beer.name} />
        <p className="info__name">{beer.name}</p>
        <p className="info__ibu">IBU: {beer.ibu}</p>
      </div>
      <button
        className="add-button"
        onClick={() => {
          handlerAddButton(beer);
        }}
      >
        <img src="img/add-icon.png" alt="Add button" />
      </button>
    </li>
  );
}
