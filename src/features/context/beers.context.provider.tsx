import { useMemo } from 'react';
import { BeerApiRepo } from '../services/beer.api.repo';
import { BeersContext } from './beers.context';

export function BeersContextProvider({ children }: { children: JSX.Element }) {
  const beerListRepo = useMemo(() => new BeerApiRepo(), []);

  // TEMPORAL hasta que esté el Custom Hook:
  // const context = {...useBeers(beerListRepo),};

  return (
    <BeersContext.Provider value={context}>{children}</BeersContext.Provider>
  );
}
