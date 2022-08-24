import { Location } from './types';

export enum ClientMessageType {
  JOIN = 'client:join',
  LEAVE = 'client:leave',

  MOVE_PLAYER = 'client:movePlayer',

  START_GAME = 'client:startGame',

  FINISH_TASK = 'client:finishTask',
  VENT = 'client:vent',
  EXIT_VENT = 'client:exitVent',
  KILL = 'client:kill',
}

export type ClientAmongusPayloadType = {
  [ClientMessageType.JOIN]: { uuid: string };
  [ClientMessageType.LEAVE]: {};

  [ClientMessageType.MOVE_PLAYER]: { newPosition: Location };

  [ClientMessageType.START_GAME]: {};

  [ClientMessageType.FINISH_TASK]: { taskType: string };
  [ClientMessageType.VENT]: { id: number };
  [ClientMessageType.EXIT_VENT]: {};
  [ClientMessageType.KILL]: { playerId: string };
};
