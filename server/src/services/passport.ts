import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
import keys from "../../config/keys";

export function passPortCall(){
    passport.use( new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, (accessToken:any, refreshToken:any, profile:any, done:any) => {
                console.log(`accessToken: ${accessToken}\n`);
                console.log(`refreshToken: ${refreshToken}\n`);
                console.log(`profile: ${JSON.stringify(profile)}\n`);
                console.log(`done: ${done}\n`);
            }
        )
    );

    passport.use( new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookSecret,
            callbackURL: '/auth/facebook/callback'
        }, (accessToken:any, refreshToken:any, profile:any, done:any) => {
                console.log(`accessToken: ${accessToken}\n`);
                console.log(`refreshToken: ${refreshToken}\n`);
                console.log(`profile: ${JSON.stringify(profile)}\n`);
                console.log(`done: ${done}\n`);
            }
        )
    );
}