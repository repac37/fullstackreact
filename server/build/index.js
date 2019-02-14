"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var passport_1 = __importDefault(require("passport"));
var User_1 = require("./models/User");
var authRoutes_1 = require("./routes/authRoutes");
//import session from 'express-session';
//import bodyParser from "body-parser";
mongoose_1.default.model('users', User_1.userSchema);
var passport_2 = require("./services/passport");
passport_2.passPortCall();
mongoose_1.default.connect(process.env.MONGO_URI || "", { useNewUrlParser: true }, function (err) {
    if (err) {
        return console.error('failed');
    }
});
var app = express_1.default();
app.use(cookie_session_1.default({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY || ""]
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
authRoutes_1.authRoutes(app);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Example app listening on port " + PORT);
});
//# sourceMappingURL=index.js.map