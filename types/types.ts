export interface Location {
  x: number;
  y: number;
}

export interface SerializedPlayer {
  id: string;
  position: Location;
}

export enum GameRole {
  IMPOSTER = 'imposter',
  CREWMATES = 'crewmate',
}
