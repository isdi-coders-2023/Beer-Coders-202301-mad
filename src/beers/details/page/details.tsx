import { BeerStructure } from '../../models/beer';
import './details.scss';

type DetailProps = {
  detailBeer: BeerStructure | any;
};

export default function DetailsPage({ detailBeer }: DetailProps) {
  return (
    <>
      <h2 className="main-card-title">Details</h2>
      <div className="main-card">
        <div className="info-img">
          <img src={detailBeer.image_url} alt={detailBeer.name} />
        </div>
        <div className="info-text">
          <p className="info-text__name">{detailBeer.name}</p>
          <p className="info-text__abv">ABV: {detailBeer.abv}</p>
          <p className="info-text__ibu">IBU: {detailBeer.ibu}</p>
          <p className="info-text__description">{detailBeer.description}</p>
        </div>
      </div>
    </>
  );
}
