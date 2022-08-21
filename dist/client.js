"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMessageType = void 0;
var ClientMessageType;
(function (ClientMessageType) {
    ClientMessageType["JOIN"] = "client:join";
    ClientMessageType["LEAVE"] = "client:leave";
    ClientMessageType["MOVE_PLAYER"] = "client:movePlayer";
    ClientMessageType["START_GAME"] = "client:startGame";
    ClientMessageType["FINISH_TASK"] = "client:finishTask";
})(ClientMessageType = exports.ClientMessageType || (exports.ClientMessageType = {}));
