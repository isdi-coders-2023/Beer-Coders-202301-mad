import { BeerStructure } from '../../../models/beer';
import './main.card.scss';

type MainCardProps = {
  beer: BeerStructure;
};

// TEMPORAL: Hasta que esté el Custom Hook Private:
// const { createBeer } = useContext(BeersContext);

// const handlerAddBeer = (event: SyntheticEvent) => {
//   event.preventDefault();
//   const form = event.target as HTMLFormElement;
//   const inputs = form.querySelectorAll('input');
//   const newNote = new ProtoNote(inputs[0].value, inputs[1].value);
//   console.log(newNote);
//   addNote(newNote);
// };

export function MainCard({ beer }: MainCardProps) {
  return (
    <li className="main-card">
      <div className="info">
        <img src={beer.image_url} alt={beer.name} />
        <p className="info__name">{beer.name}</p>
        <p className="info__ibu">IBU: {beer.ibu}</p>
      </div>
      <button
        className="add-button"
        // onClick={() => {
        //   createBeer(beer);
        // }}
      >
        <img src="img/add-icon.png" alt="Add button" />
      </button>
    </li>
  );
}
