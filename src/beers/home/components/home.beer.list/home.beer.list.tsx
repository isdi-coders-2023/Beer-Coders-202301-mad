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
      <div className="home-page-list-filter"></div>
      <ul>
        {beerList.map((item: BeerStructure) => (
          <MainCard key={item.id} beer={item}></MainCard>
        ))}
      </ul>
      <div className="home-page-list-cards"></div>

      <div className="home-page-list-next-prev-button"></div>
    </>
  );
}
