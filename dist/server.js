"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMessageType = void 0;
var ServerMessageType;
(function (ServerMessageType) {
    ServerMessageType["PLAYER_JOIN"] = "server:playerJoin";
    ServerMessageType["ACCEPT_JOIN"] = "server:acceptJoin";
    ServerMessageType["DENY_JOIN"] = "server:denyJoin";
    ServerMessageType["GAME_END"] = "server:endGame";
    ServerMessageType["PLAYER_LEAVE"] = "server:playerLeave";
    ServerMessageType["PLAYER_MOVE"] = "server:playerMove";
    ServerMessageType["PLAYER_DEATH"] = "server:playerDeath";
    ServerMessageType["LOAD_MAP"] = "server:loadMap";
    ServerMessageType["UUID"] = "server:uuid";
    ServerMessageType["GAME_PLAYER_DATA"] = "server:sendGameData";
})(ServerMessageType = exports.ServerMessageType || (exports.ServerMessageType = {}));
