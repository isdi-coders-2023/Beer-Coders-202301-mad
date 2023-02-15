import { DetailedCard } from '../../../core/components/detailsCard/detailsCard';
import { MainCard } from '../../home/components/main.card/main.card';
import './mybeers.scss';

export default function MyBeers() {
  return (
    <section className="my-beers">
      <h2>My Beers</h2>
      <div className="list">
        <MainCard></MainCard>
        <DetailedCard></DetailedCard>
      </div>
    </section>
  );
}
