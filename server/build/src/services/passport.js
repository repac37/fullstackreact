"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var Auth0Strategy = require('passport-auth0').Strategy;
var keys_1 = __importDefault(require("../../config/keys"));
function passPortCall() {
    passport_1.default.use(new GoogleStrategy({
        clientID: keys_1.default.googleClientID,
        clientSecret: keys_1.default.googleClientSecret,
        callbackURL: '/auth/google/callback',
        state: false
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
    var auth0Strategy = new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: '/callback',
        state: false
    }, function (accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        console.log("accessToken: " + accessToken + "\n");
        console.log("refreshToken: " + refreshToken + "\n");
        console.log("extraParams: " + extraParams + "\n");
        console.log("profile: " + JSON.stringify(profile) + "\n");
        console.log("done: " + done + "\n");
    });
    passport_1.default.use(auth0Strategy);
}
exports.passPortCall = passPortCall;
//# sourceMappingURL=passport.js.map