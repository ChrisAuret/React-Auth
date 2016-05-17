const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model
const userSchema = new userSchema({
    email: { type: String, unique: true },
    password: String
});