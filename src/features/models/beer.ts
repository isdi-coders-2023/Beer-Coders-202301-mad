type HasId = {
  id: number;
};

export type ProtoBeerStructure = {
  picture: string;
  name: string;
  ibu: number;
  abv: number;
  type: string;
  description: string;
};

export type BeerStructure = HasId & ProtoBeerStructure;

export class ProtoBeer implements ProtoBeerStructure {
  public isFavorite: boolean;

  constructor(
    public picture: string,
    public name: string,
    public ibu: number,
    public abv: number,
    public type: string,
    public description: string
  ) {
    this.isFavorite = false;
  }
}
