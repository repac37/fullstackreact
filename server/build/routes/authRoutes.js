"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
function authRoutes(app) {
    // passport has internal identitifier that means that 'google' = GoogleStrategy
    app.get('/auth/facebook', passport_1.default.authenticate('facebook', {
        scope: ['user_friends', 'manage_pages']
    }));
    app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook'));
    app.get('/api/logout', function (req, res) {
        req.logOut();
        res.send(req.user);
    });
    app.get('/api/current_user', function (req, res) {
        res.send(req.user);
    });
}
exports.authRoutes = authRoutes;
//# sourceMappingURL=authRoutes.js.map