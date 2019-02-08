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

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/auth/facebook/callback', passport.authenticate('facebook'));

    app.get('/tessy', (_req, res) => {
        res.send("Sending..");
    });
};