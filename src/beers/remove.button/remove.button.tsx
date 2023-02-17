import { DetailedCard } from '../../core/components/detailsCard/detailsCard';

export default function Remove(): JSX.Element {
  function deleteBeers(name: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className="remove-button">
        <button
          onClick={() => {
            deleteBeers(DetailedCard.name);
          }}
        >
          {' '}
          <img src="img/remove-icon.png" alt="remove button" height="20rem" />
        </button>
      </div>
    </>
  );
}
