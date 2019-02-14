import passport from 'passport';
const FacebookStrategy = require('passport-facebook').Strategy;
import mongoose from 'mongoose';


const User = mongoose.model('users');

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
  });

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user:any) => {
      done(err, user);
  });
});

export function passPortCall(){

    passport.use( new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID||"",
            clientSecret: process.env.FACEBOOK_SECRET||"",
            callbackURL: '/auth/facebook/callback'
        }, 
        (_accessToken:any, _refreshToken:any, profile:any, done:any) => {
                User.findOne({authId: profile.id})
                    .then((existingUser)=>{
                        if(existingUser){
                            done(null,existingUser);
                        }else{
                            new User({authId: profile.id})
                                .save()
                                .then(user => done(null, user));  
                        }
                    })  
        })
    ); 
    
}