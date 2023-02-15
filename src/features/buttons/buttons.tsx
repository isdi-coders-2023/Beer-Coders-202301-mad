import './button.scss';

export default function Button() {
  return (
    <>
      <button className="edit-button">Edit</button>
      <button className="remove-button">
        <img src="img/remove-icon.png" alt="remove button" height="20rem" />
      </button>
    </>
  );
}
