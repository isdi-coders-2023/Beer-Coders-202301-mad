import { BeerStructure } from '../../models/beer';

export interface BeerApiRepoStructure {
  loadBeers(): Promise<BeerStructure[]>;
  getBeer(id: BeerStructure['id']): Promise<BeerStructure>;
}

export class BeerApiRepo {
  url: string;

  constructor() {
    this.url = 'https://api.punkapi.com/v2/beers';
  }

  async loadPublicBeers(): Promise<BeerStructure[]> {
    const defaultPage = '?page=';
    const beersPerPage = '&per_page=20';

    const pageNumber = '1';

    const url = this.url + defaultPage + pageNumber + beersPerPage;

    const response = await fetch(url);
    const beerList = (await response.json()) as BeerStructure[];
    console.log(beerList);
    return beerList;
  }

  async getPublicBeer(id: BeerStructure['id']): Promise<BeerStructure> {
    const url = this.url + '/' + id;
    const response = await fetch(url);
    const beerInfo = (await response.json()) as BeerStructure;
    console.log(beerInfo);
    return beerInfo;
  }
}