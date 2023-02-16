import './main.card.scss';

export function MainCard() {
  // Recibir por Props una cerveza. "beer"

  return (
    <>
      <div className="main-card">
        <div className="info">
          <img src="img/beer-empty-transparent.png" alt="Unnamed beer" />
          {/* TEMPORAL: De API "beer.image_url" */}
          <p className="info__name"> Nombre de Cerveza </p>
          {/* TEMPORAL: De API "beer.name" */}
          <p className="info__ibu"> IBU 50 </p>
          {/* TEMPORAL: De API "beer.ibu" */}
        </div>
        <button className="add-button">
          <img src="img/add-icon.png" alt="Add button" />
        </button>
      </div>
    </>
  );
}
