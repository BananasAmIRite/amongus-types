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
  characterType: CharacterType;
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

export enum CharacterType {
  RED = 'red',
  PURPLE = 'purple',
  CYAN = 'cyan',
  BLACK = 'black',
  YELLOW = 'yellow',
  LIME = 'lime',
  GREEN = 'green',
  ORANGE = 'orange',
  WHITE = 'white',
  BLUE = 'blue',
  BROWN = 'brown',
  PINK = 'pink',
  GRAY = 'gray',
}
