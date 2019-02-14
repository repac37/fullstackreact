"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth0_js_1 = __importDefault(require("auth0-js"));
var keys_1 = __importDefault(require("../../config/keys"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.auth0 = new auth0_js_1.default.WebAuth({
            domain: 'dev-u5f8htn2.eu.auth0.com',
            clientID: keys_1.default.auth0clientID,
            redirectUri: 'http://localhost:5000/callback',
            responseType: 'token id_token',
            scope: 'openid'
        });
    }
    Auth.prototype.login = function () {
        this.auth0.authorize();
    };
    return Auth;
}());
exports.default = Auth;
//# sourceMappingURL=auth.js.map