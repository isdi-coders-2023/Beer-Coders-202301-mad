import { DetailedCard } from '../../../core/components/detailsCard/detailsCard';
import { Edit } from '../../button.edit/buttons.edit';
import CreateButton from '../../create.button/create.button';
import Remove from '../../remove.button/remove.button';
import './mybeers.scss';

export default function MyBeers() {
  return (
    <section className="my-beers">
      <h2 className="title">My Beers</h2>
      <div className="create">
        <CreateButton></CreateButton>
      </div>
      <div className="remove">
        <Remove></Remove>
      </div>
      <div className="edit">
        <Edit></Edit>
      </div>
      <div className="Details">
        <div className="card-detail">
          <DetailedCard></DetailedCard>
        </div>
      </div>
    </section>
  );
}
