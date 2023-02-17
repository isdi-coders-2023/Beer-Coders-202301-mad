export default function deletePrivateBeer(): JSX.Element {
  return (
    <>
      <div className="remove-button">
        <button
          onClick={() => {
            deletePrivateBeer();
          }}
        >
          {' '}
          <img src="img/remove-icon.png" alt="remove button" height="20rem" />
        </button>
      </div>
    </>
  );
}
