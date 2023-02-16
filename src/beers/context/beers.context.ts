import { createContext } from 'react';
import { UseBeersStructure } from '../hooks/use.beers';

export const BeersContext = createContext({} as UseBeersStructure);
