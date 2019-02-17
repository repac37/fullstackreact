import passport from 'passport';
const FacebookStrategy = require('passport-facebook').Strategy;

export function passPortCall(User:any){
    
    passport.serializeUser<any, any>((user, done) => {
        done(undefined, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err:any, user:any) => {
        done(err, user);
        });
    });

    passport.use( new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID||"",
            clientSecret: process.env.FACEBOOK_SECRET||"",
            callbackURL: process.env.FACEBOOK_URL+'auth/facebook/callback',
            passReqToCallback : true
        }, 
        (_accessToken:any, _refreshToken:any, profile:any, done:any) => {
                User.findOne({authId: profile.id})
                    .then((existingUser:any)=>{
                        if(existingUser){
                            done(null,existingUser);
                        }else{
                            new User({authId: profile.id})
                                .save()
                                .then((user:any) => done(null, user));  
                        }
                    })  
        })
    ); 
    
}