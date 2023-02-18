import { useContext } from 'react';
import { PrivateBeersContext } from '../context/private.beer.context';
import { BeerStructure } from '../models/beer';
import './detailsCard.scss';

type DetailedCardProps = {
  beer: BeerStructure;
};

export function DetailedCard({ beer }: DetailedCardProps) {
  const { deleteBeer } = useContext(PrivateBeersContext);

  const handlerDeleteButton = (id: BeerStructure['id']) => {
    deleteBeer(id);
  };

  return (
    <div className="main-card">
      <div className="info-img">
        <img src={beer.image_url} alt={beer.name} />
        <button
          className="delete-button"
          onClick={() => {
            handlerDeleteButton(beer.id);
          }}
        >
          <img src="img/remove-icon.png" alt="delete button" />
        </button>
      </div>
      <div className="info-text">
        <p className="info-text__name">{beer.name}</p>
        <p className="info-text__abv">ABV: {beer.abv}</p>
        <p className="info-text__ibu">IBU: {beer.ibu}</p>
        <p className="info-text__description">{beer.description}</p>
      </div>
    </div>
  );
}
