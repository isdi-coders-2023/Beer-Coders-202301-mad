import { DetailedCard } from '../../core/components/detailsCard/detailsCard';

export default function Delete(): JSX.Element {
  return (
    <>
      <div className="remove-button">
        <button
          onClick={() => {
            Delete();
          }}
        >
          {' '}
          <img src="img/remove-icon.png" alt="remove button" height="20rem" />
        </button>
      </div>
    </>
  );
}
