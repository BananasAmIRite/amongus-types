export interface Location {
  x: number;
  y: number;
}

export interface SerializedPlayer {
  id: string;
  position: Location;
  isDead: boolean;
  deadBodyPosition: Location;
  displayName: string;
}

export enum GameRole {
  IMPOSTER = 'imposter',
  CREWMATES = 'crewmate',
}

export interface AmongusTask {
  type: string;
  position: Location;
}
