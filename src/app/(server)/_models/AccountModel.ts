import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    _id : {
        type: String,
        required: false
    },
    roles : {
        type: Array,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}, { timestamps: true, collection: 'accounts'});

const AccountModel = mongoose.model('Account', accountSchema);  

export default AccountModel;