import express from 'express';
import mongoose from 'mongoose';
import cookieSession from "cookie-session";
import passport from "passport";
import {userSchema} from "./models/User";
import { authRoutes } from './routes/authRoutes';
import { passPortCall } from './services/passport';

mongoose.model('users', userSchema);
const User: any = mongoose.model('users');
passPortCall(User);

mongoose.connect(process.env.MONGO_URI||"", { useNewUrlParser: true }, function(err) {
  if (err) { return console.error('failed');}
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [process.env.COOKIE_KEY||""]
  })
)

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
console.log(":::::::::::::::::::::");  
const PORT:string|number|undefined = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});
