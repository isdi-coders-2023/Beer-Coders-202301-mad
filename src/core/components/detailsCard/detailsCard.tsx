import './detailsCard.scss';

export function DetailedCard() {
  // Recibir por Props una cerveza. "beer"

  return (
    <>
      <div className="main-card">
        <div className="info-img">
          <img src="img/beer-empty-transparent.png" alt="Unnamed beer" />
          {/* TEMPORAL: De API "beer.image_url" */}
        </div>
        <div className="info-text">
          <p className="info__name"> Heineken </p>
          {/* TEMPORAL: De API "beer.name" */}
          <p className="info__type"> Extra Pale </p>
          {/* TEMPORAL: De API "beer.type" */}
          <p className="info__abv"> ABV 5 </p>
          {/* TEMPORAL: De API "beer.abv" */}
          <p className="info_abu"> IBU 50 </p>
          {/* TEMPORAL: De API "beer.ibu" */}
          <p className="info_description">
            {' '}
            This beer is about pushing the boundaries, it is about taking
            innovation in beer to a whole new level. Dark and decadent, plum,
            treacle and roast coffee are amplified beyond any stout you've had
            before.{' '}
          </p>
          {/* TEMPORAL: De API "beer.description" */}
        </div>
      </div>
    </>
  );
}
