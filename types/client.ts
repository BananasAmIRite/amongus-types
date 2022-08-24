import { Location } from './types';

export enum ClientMessageType {
  JOIN = 'client:join',
  LEAVE = 'client:leave',

  MOVE_PLAYER = 'client:movePlayer',

  START_GAME = 'client:startGame',

  FINISH_TASK = 'client:finishTask',
  VENT = 'client:vent',
}

export type ClientAmongusPayloadType = {
  [ClientMessageType.JOIN]: { uuid: string };
  [ClientMessageType.LEAVE]: {};

  [ClientMessageType.MOVE_PLAYER]: { newPosition: Location };

  [ClientMessageType.START_GAME]: {};

  [ClientMessageType.FINISH_TASK]: { taskType: string };
  [ClientMessageType.VENT]: { id: number };
};
