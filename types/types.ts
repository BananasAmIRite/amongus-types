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
  visible: boolean;
}

export enum GameRole {
  IMPOSTER = 'imposter',
  CREWMATES = 'crewmate',
}

export interface AmongusTask {
  type: string;
  position: Location;
}

export interface AmongusVent {
  id: number;
  position: Location;
  connectingVents: AmongusVent['id'][];
}
