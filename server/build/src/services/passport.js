"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var keys_1 = __importDefault(require("../../config/keys"));
function passPortCall() {
    passport_1.default.use(new GoogleStrategy({
        clientID: keys_1.default.googleClientID,
        clientSecret: keys_1.default.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, function (accessToken, refreshToken, profile, done) {
        console.log("accessToken: " + accessToken + "\n");
        console.log("refreshToken: " + refreshToken + "\n");
        console.log("profile: " + JSON.stringify(profile) + "\n");
        console.log("done: " + done + "\n");
    }));
    passport_1.default.use(new FacebookStrategy({
        clientID: keys_1.default.facebookClientID,
        clientSecret: keys_1.default.facebookSecret,
        callbackURL: '/auth/facebook/callback'
    }, function (accessToken, refreshToken, profile, done) {
        console.log("accessToken: " + accessToken + "\n");
        console.log("refreshToken: " + refreshToken + "\n");
        console.log("profile: " + JSON.stringify(profile) + "\n");
        console.log("done: " + done + "\n");
    }));
}
exports.passPortCall = passPortCall;
//# sourceMappingURL=passport.js.map