import { GameRole, SerializedPlayer, Location } from './types';
export declare enum ServerMessageType {
    PLAYER_JOIN = "server:playerJoin",
    ACCEPT_JOIN = "server:acceptJoin",
    DENY_JOIN = "server:denyJoin",
    GAME_END = "server:endGame",
    PLAYER_LEAVE = "server:playerLeave",
    PLAYER_MOVE = "server:playerMove",
    PLAYER_DEATH = "server:playerDeath",
    LOAD_MAP = "server:loadMap",
    UUID = "server:uuid",
    GAME_PLAYER_DATA = "server:sendGameData"
}
export declare type ServerAmongusPayloadType = {
    [ServerMessageType.PLAYER_JOIN]: {
        player: SerializedPlayer;
    };
    [ServerMessageType.ACCEPT_JOIN]: {
        selfPlayer: SerializedPlayer;
    };
    [ServerMessageType.DENY_JOIN]: {
        reason: string;
    };
    [ServerMessageType.GAME_END]: {
        winner: GameRole;
    };
    [ServerMessageType.PLAYER_LEAVE]: {
        playerId: string;
    };
    [ServerMessageType.PLAYER_MOVE]: {
        playerId: string;
        position: Location;
    };
    [ServerMessageType.PLAYER_DEATH]: {
        playerId: string;
    };
    [ServerMessageType.LOAD_MAP]: {
        resource: string;
    };
    [ServerMessageType.UUID]: {
        uuid: string;
    };
    [ServerMessageType.GAME_PLAYER_DATA]: {
        tasks: {
            type: string;
            position: Location;
        }[];
    };
};
