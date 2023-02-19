import { Link } from 'react-router-dom';
import { DetailedCard } from '../../../core/components/detailsCard/detailsCard';
import { Edit } from '../../button.edit/buttons.edit';
import CreateButton from '../../create.button/create.button';
import DeleteButton from '../../delete.button/delete.button';
import './mybeers.scss';

export default function MyBeers() {
  return (
    <section className="my-beers">
      <h2 className="title">My Beers</h2>
      <div className="create">
        <Link to="/create">
          <button>+ Create your beer</button>
        </Link>{' '}
      </div>
      <div className="delete">
        <DeleteButton></DeleteButton>
      </div>
      <div className="edit">
        <Edit></Edit>
      </div>
      <div className="Details">
        <div className="card-detail">
          <DetailedCard></DetailedCard>
          <DetailedCard></DetailedCard>
        </div>
      </div>
    </section>
  );
}
