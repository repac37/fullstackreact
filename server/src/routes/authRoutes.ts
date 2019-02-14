import passport from 'passport';
import express from 'express';



export function authRoutes(app: express.Application){


    // passport has internal identitifier that means that 'google' = GoogleStrategy
    app.get('/auth/google',
    passport.authenticate('google', { 
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/facebook',
    passport.authenticate('facebook', { 
        scope: ['user_friends', 'manage_pages'] 
        })
    );

    app.get('/callback',
    passport.authenticate('auth0', { failureRedirect: '/login' }),
        function(req, res) {
            if (!req.user) {
                throw new Error('user null');
            }
            res.redirect("/");
        }
    );

    app.get('/login',
        passport.authenticate('auth0', {}), function (_req, res) {
        res.redirect("/");
    });

    app.get('/auth/google/callback', passport.authenticate('google'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook'));

    

};