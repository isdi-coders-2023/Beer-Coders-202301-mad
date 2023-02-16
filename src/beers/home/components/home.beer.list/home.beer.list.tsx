import { useContext, useEffect } from 'react';
import { BeersContext } from '../../../context/beers.context';
import { BeerStructure } from '../../../models/beer';
import { MainCard } from '../main.card/main.card';

export function HomeBeerList() {
  const { beerList, loadBeers } = useContext(BeersContext);

  useEffect(() => {
    loadBeers();
  }, [loadBeers]);

  return (
    <>
      <div className="home-page-list-filter">FILTRO</div>
      <div className="home-page-list-cards">
        <ul>
          {beerList.map((item: BeerStructure, index) => (
            <MainCard key={index} beer={item}></MainCard>
          ))}
        </ul>
      </div>
      <div className="home-page-list-next-prev-button">PREV-NEXT-BUTTON</div>
    </>
  );
}
