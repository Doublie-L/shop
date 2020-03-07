"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    password: String,
});
//# sourceMappingURL=user.schema.js.map