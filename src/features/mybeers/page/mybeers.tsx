import { DetailedCard } from '../../../core/components/detailsCard/detailsCard';
import './mybeers.scss';

export default function MyBeers() {
  return (
    <section className="my-beers">
      <div className="grid">
        <h2 className="">My Beers</h2>
        <div className="create">+</div>

        <div className="Details">
          <div className="card-detail">
            <DetailedCard></DetailedCard>
            <DetailedCard></DetailedCard>
          </div>
          <div className="button"></div>
        </div>
      </div>
    </section>
  );
}
