import { useContext, useEffect } from 'react';
import { BeersContext } from '../../../context/beers.context';
import './filter.scss';

export default function FilterButtons() {
  const { beerList, loadBeers } = useContext(BeersContext);

  useEffect(() => {
    loadBeers();
  }, [loadBeers]);

  const filteredBeers = (): Beers => {
    loadBeers();
  };

  return (
    <div className="filter-buttons">
      <button className="pale">Pale Ale</button>
      <button className="pilsner">Pilsner</button>
      <button className="extra">Extra Pale</button>
      <button className="all">All</button>
    </div>
  );
}
