"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
function authRoutes(app) {
    // passport has internal identitifier that means that 'google' = GoogleStrategy
    app.get('/auth/google', passport_1.default.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/facebook', passport_1.default.authenticate('facebook', {
        scope: ['user_friends', 'manage_pages']
    }));
    app.get('/callback', passport_1.default.authenticate('auth0', { failureRedirect: '/login' }), function (req, res) {
        if (!req.user) {
            throw new Error('user null');
        }
        res.redirect("/");
    });
    app.get('/login', passport_1.default.authenticate('auth0', {}), function (_req, res) {
        res.redirect("/");
    });
    app.get('/auth/google/callback', passport_1.default.authenticate('google'));
    app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook'));
}
exports.authRoutes = authRoutes;
;
//# sourceMappingURL=authRoutes.js.map