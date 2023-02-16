export default function Remove(): JSX.Element {
  return (
    <>
      <div className="remove-button">
        <button onClick={Remove}>
          {' '}
          <img src="img/remove-icon.png" alt="remove button" height="20rem" />
        </button>
      </div>
    </>
  );
}
