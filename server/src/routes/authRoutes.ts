import passport from 'passport';
import express from 'express';

export function authRoutes(app: express.Application){

    // passport has internal identitifier that means that 'google' = GoogleStrategy
    app.get('/auth/facebook',
    passport.authenticate('facebook', { 
        scope: ['public_profile'] 
        })
    );

    app.get('auth/facebook/callback', passport.authenticate('facebook'));
    
    app.get('/api/logout',(req,res)=>{
        req.logOut();
        res.send(req.user);
    });

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });

    app.get('/',(_req,res)=>{
        res.send({hi: 'there'});
    });
}