import { BeerStructure } from '../models/beer';
import './detailsCard.scss';

type DetailedCardProps = {
  beer: BeerStructure;
};

export function DetailedCard({ beer }: DetailedCardProps) {
  return (
    <div className="main-card">
      <div className="info-img">
        <img src={beer.image_url} alt={beer.name} />
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
