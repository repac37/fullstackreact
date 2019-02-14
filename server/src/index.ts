import express from 'express';
import { passPortCall } from './services/passport';
import { authRoutes } from './routes/authRoutes';
import mongoose from 'mongoose';
import {userSchema} from "./models/User";
//import session from 'express-session';
//import bodyParser from "body-parser";

userSchema();
console.log("MONGO_URI"+process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI||"", { useNewUrlParser: true }, function(err) {
    if (err) { return console.error('failed');}
  });

const app = express();
passPortCall();

console.log("hello");

authRoutes(app);

const PORT:string|number|undefined = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});
