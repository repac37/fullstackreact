"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var passport_1 = require("./services/passport");
var authRoutes_1 = require("./routes/authRoutes");
var app = express_1.default();
passport_1.passPortCall();
authRoutes_1.authRoutes(app);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Example app listening on port " + PORT);
});
//# sourceMappingURL=index.js.map