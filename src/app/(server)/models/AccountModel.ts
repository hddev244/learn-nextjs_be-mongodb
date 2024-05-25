import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    roles : {
        type: Array,
        required: true
    },
    name : {
        type: String,
        unique  : true,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique  : true
    },
    password : {
        type: String,
        required: true
    }
}, { timestamps: true, collection: 'accounts'});

const AccountModel = mongoose.model('Account', accountSchema);  

export default AccountModel;