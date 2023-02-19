import { useContext, useEffect } from 'react';
import { DetailedCard } from '../../detailsCard/detailsCard';
import { PrivateBeersContext } from '../../context/private.beer.context';
import CreateButton from '../../create.button/create.button';
import { BeerStructure } from '../../models/beer';
import './mybeers.scss';
import { Link } from 'react-router-dom';

export default function MyBeers() {
  const { privateBeerList, loadPrivateBeer } = useContext(PrivateBeersContext);

  useEffect(() => {
    loadPrivateBeer();
  }, [loadPrivateBeer]);

  return (
    <section className="my-beers">
      <h2 className="title">My Beers</h2>
      <div className="create">
        <Link to="/create">
          <button>+ Create your beer</button>
        </Link>{' '}
      </div>
      <div className="card-detail">
        <ul>
          {privateBeerList.map((item: BeerStructure) => (
            <DetailedCard key={item.id} beer={item}></DetailedCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
