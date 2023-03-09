"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptPassword = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var EncryptPassword = /** @class */ (function () {
    function EncryptPassword(saltNumber) {
        this.saltNumber = saltNumber;
    }
    EncryptPassword.prototype.hashPassword = function (password) {
        var hashPass = bcrypt_1.default.hashSync(password, 10);
        return hashPass;
    };
    return EncryptPassword;
}());
exports.EncryptPassword = EncryptPassword;
