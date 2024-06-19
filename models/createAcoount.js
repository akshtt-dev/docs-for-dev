import e from "express";
import mongoose from "mongoose";

const createAccountSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: String,
    date: { type: Date, default: Date.now }
});

const createAccount = mongoose.model('createAccount', createAccountSchema); 

export default createAccount;