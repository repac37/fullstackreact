"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function userSchema() {
    var Schema = mongoose_1.default.Schema;
    var userSchema = new Schema({
        auth0Id: String
    });
    mongoose_1.default.model('users', userSchema);
}
exports.userSchema = userSchema;
//# sourceMappingURL=User.js.map