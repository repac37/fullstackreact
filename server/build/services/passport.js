"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose_1 = __importDefault(require("mongoose"));
var User = mongoose_1.default.model('users');
passport_1.default.serializeUser(function (user, done) {
    done(undefined, user.id);
});
passport_1.default.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
function passPortCall() {
    passport_1.default.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID || "",
        clientSecret: process.env.FACEBOOK_SECRET || "",
        callbackURL: '/auth/facebook/callback'
    }, function (_accessToken, _refreshToken, profile, done) {
        User.findOne({ authId: profile.id })
            .then(function (existingUser) {
            if (existingUser) {
                done(null, existingUser);
            }
            else {
                new User({ authId: profile.id })
                    .save()
                    .then(function (user) { return done(null, user); });
            }
        });
    }));
}
exports.passPortCall = passPortCall;
//# sourceMappingURL=passport.js.map