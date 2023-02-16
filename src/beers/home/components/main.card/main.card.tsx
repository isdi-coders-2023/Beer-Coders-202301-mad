import { BeerStructure } from '../../../models/beer';
import './main.card.scss';

type MainCardProps = {
  beer: BeerStructure;
};

export function MainCard({ beer }: MainCardProps) {
  return (
    <>
      <div className="main-card">
        <div className="info">
          <img src={beer.image_url} alt={beer.name} />
          <p className="info__name">{beer.name}</p>
          <p className="info__ibu">IBU: {beer.ibu}</p>
        </div>
        <button className="add-button">
          <img src="img/add-icon.png" alt="Add button" />
        </button>
      </div>
    </>
  );
}
