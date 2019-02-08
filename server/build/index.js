"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    console.log(req);
    res.send({ hi: 'Yes' });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Example app listening on port " + PORT);
});
//# sourceMappingURL=index.js.map