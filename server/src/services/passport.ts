import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const Auth0Strategy  = require('passport-auth0').Strategy;
import keys from "../../config/keys";

export function passPortCall(){
    passport.use( new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            state: false
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

    const auth0Strategy = new Auth0Strategy({
        domain:       process.env.AUTH0_DOMAIN,
        clientID:     process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL:  '/callback',
        state: false
       },
       function(accessToken:any, refreshToken:any, extraParams:any, profile:any, done:any) {
         // accessToken is the token to call Auth0 API (not needed in the most cases)
         // extraParams.id_token has the JSON Web Token
         // profile has all the information from the user
         console.log(`accessToken: ${accessToken}\n`);
         console.log(`refreshToken: ${refreshToken}\n`);
         console.log(`extraParams: ${extraParams}\n`);
         console.log(`profile: ${JSON.stringify(profile)}\n`);
         console.log(`done: ${done}\n`);
       }
     );
     passport.use(auth0Strategy);  
    
}